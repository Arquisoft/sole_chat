import {Injectable} from '@angular/core';
import {SolidSession} from '../models/solid-session.model';
// TODO: Remove any UI interaction from this service
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

declare let solid: any;
declare let $rdf: any;
//import * as $rdf from 'rdflib'

const VCARD = $rdf.Namespace('http://www.w3.org/2006/vcard/ns#');
const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/'); //n0
const CONT = $rdf.Namespace('http://rdfs.org/sioc/ns#'); //n
const TERMS = $rdf.Namespace('http://purl.org/dc/terms/'); //terms
const FLOW = $rdf.Namespace('http://www.w3.org/2005/01/wf/flow#');


/**
 * A service layer for RDF data manipulation using rdflib.js
 * @see https://solid.inrupt.com/docs/manipulating-ld-with-rdflib
 */
@Injectable({
  providedIn: 'root',
})
export class RdfService {

  session: SolidSession;
  store = $rdf.graph();

  /**
   * A helper object that connects to the web, loads data, and saves it back. More powerful than using a simple
   * store object.
   * When you have a fetcher, then you also can ask the query engine to go fetch new linked data automatically
   * as your query makes its way across the web.
   * @see http://linkeddata.github.io/rdflib.js/doc/Fetcher.html
   */
  fetcher = $rdf.Fetcher;

  /**
   * The UpdateManager allows you to send small changes to the server to “patch” the data as your user changes data in
   * real time. It also allows you to subscribe to changes other people make to the same file, keeping track of
   * upstream and downstream changes, and signaling any conflict between them.
   * @see http://linkeddata.github.io/rdflib.js/doc/UpdateManager.html
   */
  updateManager = $rdf.UpdateManager;

  constructor(private toastr: ToastrService) {
    const fetcherOptions = {};
    this.fetcher = new $rdf.Fetcher(this.store, fetcherOptions);
    this.updateManager = new $rdf.UpdateManager(this.store);
    this.getSession();
  }

  async createMessage(message, maker) {
    /*
    :Msg1551093450028
      terms:created "2019-02-25T11:17:30Z"^^XML:dateTime;
      n:content "pnjoino";
      n0:maker c:me.
    */
    let newId = 'Msg' + Date.now();
    const doc = $rdf.sym(this.session.webId.split('/profile')[0] + "/public/messages.ttl");
    let subject = $rdf.sym(this.session.webId.split('/profile')[0] + "/public/messages.ttl#" + newId);

    //Generate statement for the date of creation    
    let predicateDate = $rdf.sym(TERMS('created'));
    var date = new Date();
    var contentDate =
    date.getUTCFullYear() + "/" +
    ("0" + (date.getUTCMonth()+1)).slice(-2) + "/" +
    ("0" + date.getUTCDate()).slice(-2) + " " +
    ("0" + date.getUTCHours()).slice(-2) + ":" +
    ("0" + date.getUTCMinutes()).slice(-2) + ":" +
    ("0" + date.getUTCSeconds()).slice(-2);

    let dateSt = $rdf.st(subject, predicateDate, contentDate, doc);
    console.log(dateSt);
    this.store.add(dateSt);

    //Generate statement for the content of the message
    let predicateMessage = $rdf.sym(CONT('content'));
    let msgSt = $rdf.st(subject, predicateMessage, message, doc);
    console.log(msgSt);
    this.store.add(msgSt);

    //Generate statement for the content of the message
    let predicateMaker = $rdf.sym(FOAF('maker'));
    let makerSt = $rdf.sym("https://" + maker + ".solid.community/profile/card#me");
    let makerStatement = $rdf.st(subject, predicateMaker, makerSt, doc);
    console.log(makerStatement);
    this.store.add(makerStatement);
    
    //const store = this.store.any(subject, FOAF("maker"));
  }

  async addMessage(body, message, maker) {
    let doc = $rdf.sym(this.session.webId.split('/profile')[0] + "/public/messages.ttl");
    $rdf.parse(body, this.store, doc.uri, 'text/turtle'); //add it to the store
    this.createMessage(message, maker);
    let content = $rdf.serialize(doc, this.store, doc.uri, 'text/turtle');
    console.log(content);
    return content; //return it in string format
  }

  async getLastMessage() {
    //let subject = $rdf.sym(this.session.webId.split('/profile')[0] + "/public/messages.ttl#Msg234134");
    console.log(this.store.any(CONT("content")));
  }

  getWebID = async () => {
    return this.session.webId;
  };

  /**
   * Fetches the session from Solid, and store results in localStorage
   */
  getSession = async () => {
    this.session = await solid.auth.currentSession(localStorage);
  }

  /**
   * Gets a node that matches the specified pattern using the VCARD onthology
   *
   * any() can take a subject and a predicate to find Any one person identified by the webId
   * that matches against the node/predicated
   *
   * @param {string} node VCARD predicate to apply to the $rdf.any()
   * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
   * @return {string} The value of the fetched node or an emtpty string
   * @see https://github.com/solid/solid-tutorial-rdflib.js
   */
  getValueFromVcard = (node: string, webId?: string): string | any => {
    return this.getValueFromNamespace(node, VCARD, webId);
  };

  getArray = (node: string) => {
    return this.getArrayFromNamespace(node, VCARD, this.session.webId);
  };

  /**
   * Gets a node that matches the specified pattern using the FOAF onthology
   * @param {string} node FOAF predicate to apply to the $rdf.any()
   * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
   * @return {string} The value of the fetched node or an emtpty string
   */
  getValueFromFoaf = (node: string, webId?: string) => {
    return this.getValueFromNamespace(node, FOAF, webId);
  };

  transformDataForm = (form: NgForm, me: any, doc: any) => {
    const insertions = [];
    const deletions = [];
    const fields = Object.keys(form.value);
    const oldProfileData = JSON.parse(localStorage.getItem('oldProfileData')) || {};

    // We need to split out into three code paths here:
    // 1. There is an old value and a new value. This is the update path
    // 2. There is no old value and a new value. This is the insert path
    // 3. There is an old value and no new value. Ths is the delete path
    // These are separate codepaths because the system needs to know what to do in each case
    fields.map(field => {

      let predicate = VCARD(this.getFieldName(field));
      let subject = this.getUriForField(field, me);
      let why = doc;

      let fieldValue = this.getFieldValue(form, field);
      let oldFieldValue = this.getOldFieldValue(field, oldProfileData);

      // if there's no existing home phone number or email address, we need to add one, then add the link for hasTelephone or hasEmail
      if (!oldFieldValue && fieldValue && (field === 'phone' || field === 'email')) {
        this.addNewLinkedField(field, insertions, predicate, fieldValue, why, me);
      } else {

        //Add a value to be updated
        if (oldProfileData[field] && form.value[field] && !form.controls[field].pristine) {
          deletions.push($rdf.st(subject, predicate, oldFieldValue, why));
          insertions.push($rdf.st(subject, predicate, fieldValue, why));
        }

        //Add a value to be deleted
        else if (oldProfileData[field] && !form.value[field] && !form.controls[field].pristine) {
          deletions.push($rdf.st(subject, predicate, oldFieldValue, why));
        }

        //Add a value to be inserted
        else if (!oldProfileData[field] && form.value[field] && !form.controls[field].pristine) {
          insertions.push($rdf.st(subject, predicate, fieldValue, why));
        }
      }
    });

    return {
      insertions: insertions,
      deletions: deletions
    };
  };

  private addNewLinkedField(field, insertions, predicate, fieldValue, why, me: any) {
    //Generate a new ID. This id can be anything but needs to be unique.
    let newId = field + ':' + Date.now();

    //Get a new subject, using the new ID
    let newSubject = $rdf.sym(this.session.webId.split('#')[0] + '#' + newId);

    //Set new predicate, based on email or phone fields
    let newPredicate = field === 'phone' ? $rdf.sym(VCARD('hasTelephone')) : $rdf.sym(VCARD('hasEmail'));

    //Add new phone or email to the pod
    insertions.push($rdf.st(newSubject, predicate, fieldValue, why));

    //Set the type (defaults to Home/Personal for now) and insert it into the pod as well
    //Todo: Make this dynamic
    let type = field === 'phone' ? $rdf.literal('Home') : $rdf.literal('Personal');
    insertions.push($rdf.st(newSubject, VCARD('type'), type, why));

    //Add a link in #me to the email/phone number (by id)
    insertions.push($rdf.st(me, newPredicate, newSubject, why));
  }

  public addNewLinkedMessage(form): String {
    const insertions = [];
    const deletions = [];
    const me = $rdf.sym(this.session.webId);
    const doc = $rdf.NamedNode.fromValue(this.session.webId.split('#')[0]);
    let field = "message";
    let predicate = VCARD(this.getFieldName(field));
    let fieldValue = this.getFieldValue(form, field);
    let why = doc;

    let newId = field + ':' + Date.now();

    //Get a new subject, using the new ID
    let newSubject = $rdf.sym(this.session.webId.split('#')[0] + '#' + newId);

    //Set new predicate
    let newPredicate = $rdf.sym(VCARD('newMessage'));

    //Add the new message to the pod
    insertions.push($rdf.st(newSubject, predicate, fieldValue, why));

    //Set the type (defaults to Home/Personal for now) and insert it into the pod as well
    //Todo: Make this dynamic
    let type = $rdf.literal('Message');
    insertions.push($rdf.st(newSubject, VCARD('type'), type, why));

    //Add a link in #me to the email/phone number (by id)
    insertions.push($rdf.st(me, newPredicate, newSubject, why));

    //Update existing values
    if (insertions.length > 0 || deletions.length > 0) {
      this.updateManager.update(deletions, insertions, (response, success, message) => {
        if (!success) {
          this.toastr.error('Message: ' + message, 'An error has occurred');
        }
      });
    }
    return this.getMessage();
  }

  private getUriForField(field, me): string {
    let uriString: string;
    let uri: any;

    switch (field) {
      case 'phone':
        uriString = this.getValueFromVcard('hasTelephone');
        if (uriString) {
          uri = $rdf.sym(uriString);
        }
        break;
      case 'email':
        uriString = this.getValueFromVcard('hasEmail');
        if (uriString) {
          uri = $rdf.sym(uriString);
        }
        break;
      default:
        uri = me;
        break;
    }

    return uri;
  }

  /**
   * Extracts the value of a field of a NgForm and converts it to a $rdf.NamedNode
   * @param {NgForm} form
   * @param {string} field The name of the field that is going to be extracted from the form
   * @return {RdfNamedNode}
   */
  private getFieldValue(form: NgForm, field: string): any {
    let fieldValue: any;

    if (!form.value[field]) {
      return;
    }

    switch (field) {
      case 'phone':
        fieldValue = $rdf.sym('tel:+' + form.value[field]);
        break;
      case 'email':
        fieldValue = $rdf.sym('mailto:' + form.value[field]);
        break;
      default:
        fieldValue = form.value[field];
        break;
    }

    return fieldValue;
  }

  private getOldFieldValue(field, oldProfile): any {
    let oldValue: any;

    if (!oldProfile || !oldProfile[field]) {
      return;
    }

    switch (field) {
      case 'phone':
        oldValue = $rdf.sym('tel:+' + oldProfile[field]);
        break;
      case 'email':
        oldValue = $rdf.sym('mailto:' + oldProfile[field]);
        break;
      default:
        oldValue = oldProfile[field];
        break;
    }

    return oldValue;
  }

  private getFieldName(field): string {
    switch (field) {
      case 'company':
        return 'organization-name';
      case 'phone':
      case 'email':
        return 'value';
      default:
        return field;
    }
  }

  updateProfile = async (form: NgForm) => {
    const me = $rdf.sym(this.session.webId);
    const doc = $rdf.NamedNode.fromValue(this.session.webId.split('#')[0]);
    const data = this.transformDataForm(form, me, doc);

    //Update existing values
    if (data.insertions.length > 0 || data.deletions.length > 0) {
      this.updateManager.update(data.deletions, data.insertions, (response, success, message) => {
        if (success) {
          this.toastr.success('Your Solid profile has been successfully updated', 'Success!');
          form.form.markAsPristine();
          form.form.markAsTouched();
        } else {
          this.toastr.error('Message: ' + message, 'An error has occurred');
        }
      });
    }
  };

  getAddress = () => {
    const linkedUri = this.getValueFromVcard('hasAddress');

    if (linkedUri) {
      return {
        locality: this.getValueFromVcard('locality', linkedUri),
        country_name: this.getValueFromVcard('country-name', linkedUri),
        region: this.getValueFromVcard('region', linkedUri),
        street: this.getValueFromVcard('street-address', linkedUri),
      };
    }

    return {};
  };

  //Function to get email. This returns only the first email, which is temporary
  getEmail = () => {
    const linkedUri = this.getValueFromVcard('hasEmail');

    if (linkedUri) {
      return this.getValueFromVcard('value', linkedUri).split('mailto:')[1];
    }

    return '';
  }

  //Function to get phone number. This returns only the first phone number, which is temporary. It also ignores the type.
  getPhone = () => {
    const linkedUri = this.getValueFromVcard('hasTelephone');

    if (linkedUri) {
      return this.getValueFromVcard('value', linkedUri).split('tel:+')[1];
    }
  };

  getMessage = () => {
    let array = this.getArray('newMessage');
    const linkedUri = array[array.length - 1];
    if (linkedUri) {
      return this.getValueFromVcard('message', linkedUri);
    }
  };

  getProfile = async () => {

    if (!this.session) {
      await this.getSession();
    }

    try {
      await this.fetcher.load(this.session.webId);

      return {
        fn: this.getValueFromVcard('fn'),
        company: this.getValueFromVcard('organization-name'),
        phone: this.getPhone(),
        role: this.getValueFromVcard('role'),
        image: this.getValueFromVcard('hasPhoto'),
        address: this.getAddress(),
        email: this.getEmail(),
      };
    } catch (error) {
      console.log(`Error fetching data: ${error}`);
    }
  };

  /**
   * Gets any resource that matches the node, using the provided Namespace
   * @param {string} node The name of the predicate to be applied using the provided Namespace 
   * @param {$rdf.namespace} namespace The RDF Namespace
   * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me) 
   */
  private getValueFromNamespace(node: string, namespace: any, webId?: string): string | any {
    const store = this.store.any($rdf.sym(webId || this.session.webId), namespace(node));
    if (store) {
      return store.value;
    }
    return '';
  }

  private getArrayFromNamespace(node: string, namespace: any, webId?: string): string | any {
    return this.store.each($rdf.sym(webId || this.session.webId), namespace(node));
  }

  public getMessages() {
    var store = $rdf.graph();
    var timeout = 5000; // 5000 ms timeout
    var fetcher = new $rdf.Fetcher(store, timeout);
    var url = 'https://emiliocortina.solid.community/public/Amiwis/index.ttl';

    fetcher.nowOrWhenFetched(url, function(ok, body, xhr) {
      if (!ok) {
        console.log('Oops, something happened and couldn\'t fetch data');
      } else {
        const subject = $rdf.sym(url + '#this');
        const nameMessage = FLOW('message');
        const messagesNodes = store.each(subject, nameMessage);

      }
    });
  }

}
