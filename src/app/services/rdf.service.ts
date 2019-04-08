import { Injectable } from '@angular/core';
import { SolidSession } from '../models/solid-session.model';
// TODO: Remove any UI interaction from this service
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

declare let solid: any;
// import * as $rdf from 'rdflib'

declare let $rdf: any;

const VCARD = $rdf.Namespace('http://www.w3.org/2006/vcard/ns#');
const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/'); // n0
const CONT = $rdf.Namespace('http://rdfs.org/sioc/ns#'); // n
const TERMS = $rdf.Namespace('http://purl.org/dc/terms/'); // terms
const MEE = $rdf.Namespace('http://www.w3.org/ns/pim/meeting#'); // mee
const N1 = $rdf.Namespace('http://purl.org/dc/elements/1.1/'); // n1
const FLOW = $rdf.Namespace('http://www.w3.org/2005/01/wf/flow#'); // flow
const XML = $rdf.Namespace('http://www.w3.org/2001/XMLSchema#');

/**
 * A service layer for RDF data manipulation using rdflib.js
 * @see https://solid.inrupt.com/docs/manipulating-ld-with-rdflib
 */
@Injectable({
    providedIn: 'root'
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

    async generateBaseChat(direction, friends, chatName) {
        let insertions = [];
        let deletions = [];

        const doc = $rdf.sym(direction);
        let subject = $rdf.sym(direction + '#this');

        let predicate = $rdf.sym('https://www.w3.org/1999/02/22-rdf-syntax-ns#type');
        let object = $rdf.sym(MEE('Chat'));
        let statement = $rdf.st(subject, predicate, object, doc);
        insertions.push(statement);

        //Author
        predicate = $rdf.sym(N1('author'));
        object = $rdf.sym(this.session.webId);
        statement = $rdf.st(subject, predicate, object, doc);
        insertions.push(statement);

        //Created
        predicate = $rdf.sym(N1('created'));
        let date = new Date();
        let contentDate = $rdf.literal(date.toISOString(), undefined, XML('dateTime'));
        statement = $rdf.st(subject, predicate, contentDate, doc);
        insertions.push(statement);

        //Title
        predicate = $rdf.sym(N1('title'));
        statement = $rdf.st(subject, predicate, 'Chat_' + chatName, doc);
        insertions.push(statement);

        //Participants
        predicate = $rdf.sym(FLOW('participation'));
        for (let i = 0; i < friends.length; i++) {
            object = $rdf.sym(friends[i].id);
            statement = $rdf.st(subject, predicate, object, doc);
            insertions.push(statement);
        }

        this.updateManager.update(deletions, insertions, (uri, ok, message) => {
            if (!ok) {
                console.log('Error: ' + message);
            }
        });
    }

    async createMessage(message, messages, direction) {
        let insertions = [];
        let deletions = [];

        let newId = 'Msg' + Date.now();
        const doc = $rdf.sym(direction);
        let subject = $rdf.sym(direction + '#' + newId);

        // Generate statement for the date of creation
        let predicateDate = $rdf.sym(TERMS('created'));
        let date = new Date();
        let dateFormatted = date.toISOString();
        let contentDate = $rdf.literal(dateFormatted, undefined, XML('dateTime'));
        let dateSt = $rdf.st(subject, predicateDate, contentDate, doc);
        insertions.push(dateSt);

        // Generate statement for the content of the message
        let predicateMessage = $rdf.sym(CONT('content'));
        let msgSt = $rdf.st(subject, predicateMessage, message, doc);
        insertions.push(msgSt);

        // Generate statement for the content of the message
        let predicateMaker = $rdf.sym(FOAF('maker'));
        let makerSt = $rdf.sym(this.session.webId); //Web id of the maker
        let makerStatement = $rdf.st(subject, predicateMaker, makerSt, doc);
        insertions.push(makerStatement);

        // Add to flow
        subject = $rdf.sym(direction + '#this');
        let predicate = $rdf.sym(FLOW('message'));
        let object = $rdf.sym(direction + '#' + newId);
        let statement = $rdf.st(subject, predicate, object, doc);
        insertions.push(statement);

        this.updateManager.update(deletions, insertions, (uri, ok, message) => {
            if (!ok) {
                console.log('Error: ' + message);
            }
        });
    }

    async updateChatIndex(chat, webId) {
        const insertions = [];
        const deletions = [];

        const chatIndex = webId.split('/profile')[0] + '/public/Sole/chatsIndex.ttl';
        const doc = $rdf.sym(chatIndex);
        //const subject = $rdf.sym(webId);
        const subject = $rdf.sym(chatIndex + '#this');
        const predicateParticipates = $rdf.sym(FLOW('participation'));
        const object = $rdf.sym(chat);
        const statement = $rdf.st(subject, predicateParticipates, object, doc);
        insertions.push(statement);

        this.updateManager.update(deletions, insertions, (uri, ok, message) => {
            if (!ok) {
                console.log('Error: ' + message);
            }
        });
    }

    async getWebID() {
        return this.session.webId;
    };

    /**
     * Fetches the session from Solid, and store results in localStorage
     */
    getSession = async () => {
        this.session = await solid.auth.currentSession(localStorage);
    };

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
        fields.map((field) => {
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
                } else if (
                    oldProfileData[field] &&
                    !form.value[field] &&
                    !form.controls[field].pristine
                ) {
                    //Add a value to be deleted
                    deletions.push($rdf.st(subject, predicate, oldFieldValue, why));
                } else if (
                    !oldProfileData[field] &&
                    form.value[field] &&
                    !form.controls[field].pristine
                ) {
                    //Add a value to be inserted
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

        // Update existing values
        if (data.insertions.length > 0 || data.deletions.length > 0) {
            this.updateManager.update(data.deletions, data.insertions, (response, success, message) => {
                if (success) {
                    this.toastr.success(
                        'Your Solid profile has been successfully updated',
                        'Success!'
                    );
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
                street: this.getValueFromVcard('street-address', linkedUri)
            };
        }

        return {};
    };

    // Function to get email. This returns only the first email, which is temporary
    getEmail = () => {
        const linkedUri = this.getValueFromVcard('hasEmail');

        if (linkedUri) {
            return this.getValueFromVcard('value', linkedUri).split('mailto:')[1];
        }

        return '';
    };

    // Function to get phone number. This returns only the first phone number, which is temporary. It also ignores the type.
    getPhone = () => {
        const linkedUri = this.getValueFromVcard('hasTelephone');

        if (linkedUri) {
            return this.getValueFromVcard('value', linkedUri).split('tel:+')[1];
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
                email: this.getEmail()
            };
        } catch (error) {
            console.log(`Error fetching data: ${error}`);
        }
    };

    // Returns a list with the user friends
    getFriends = async (list: { username: string; img: string; id: string }[]) => {
        if (!this.session) {
            await this.getSession();
        }
        try {
            var store = $rdf.graph();
            var timeout = 5000; // 5000 ms timeout
            var fetcher = new $rdf.Fetcher(store, timeout);

            let url = this.session.webId;

            fetcher.nowOrWhenFetched(url, async function (ok, body, xhr) {
                if (!ok) {
                    console.log('Oops, something happened and couldn\'t fetch data');
                } else {
                    const subject = $rdf.sym(url);
                    const friends = await store.each(subject, FOAF('knows'));
                    await friends.forEach(async (friend) => {
                        await fetcher.load(friend);
                        const webId = friend.value;
                        const nameNode = await store.any(friend, FOAF('name'));
                        let fullName = "";
                        if (nameNode == null || typeof (nameNode) === "undefined") {
                            fullName = (webId.split("://")[1]).split(".")[0];
                        } else {
                            fullName = nameNode.value;
                        }

                        let imageNode = await store.any(friend, VCARD('hasPhoto'));
                        let image;

                        if (imageNode == undefined) {
                            image = 'https://avatars.servers.getgo.com/2205256774854474505_medium.jpg';
                        } else {
                            image = imageNode.value;
                        }

                        await list.push({ username: fullName + '', img: image, id: webId });
                    });
                }
            });
        } catch (error) {
            console.log(error);
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

    // Add a function as parameter to call it when finished or fixed the asyn.
    public getMessages(messages, direction) {
        var store = $rdf.graph();
        var timeout = 5000; // 5000 ms timeout
        var fetcher = new $rdf.Fetcher(store, timeout);

        let url = direction;
        let id = this.session.webId;
        let rdfServ = this;

        fetcher.nowOrWhenFetched(url, function (ok, body, xhr) {
            if (!ok) {
                console.log('Oops, something happened and couldn\'t fetch data');
            } else {
                const subject = $rdf.sym(url + '#this');
                const nameMessage = FLOW('message');
                const messagesNodes = store.each(subject, nameMessage);

                for (let i = 0; i < messagesNodes.length; i++) {
                    let messageNode = messagesNodes[i];
                    let message = rdfServ.parseMessageNode(messageNode, store, id);
                    messages.push(message);
                }
            }
        });
    }


    public getLastMessage(messages, direction) {
        var store = $rdf.graph();
        var timeout = 5000; // 5000 ms timeout
        var fetcher = new $rdf.Fetcher(store, timeout);

        let url = direction;
        let id = this.session.webId;
        let rdfServ = this;

        fetcher.nowOrWhenFetched(url, function (ok, body, xhr) {
            if (!ok) {
                console.log('Oops, something happened and couldn\'t fetch data');
            } else {
                const subject = $rdf.sym(url + '#this');
                const nameMessage = FLOW('message');
                const messagesNodes = store.each(subject, nameMessage);
                if (messagesNodes.length >= 1) {
                    let messageNode = messagesNodes[messagesNodes.length - 1];
                    let message = rdfServ.parseMessageNode(messageNode, store, id);
                    messages.push(message);
                }
            }
        });
    }

    public parseMessageNode(messageNode, store, id) {
        let nodeContent = store.any(messageNode, CONT('content'));
        let contentText = nodeContent.value;
        let dateUTC = store.any(messageNode, TERMS('created')).value;

        let time = new Date(dateUTC).toLocaleTimeString();

        let timeFormatted = time.split(':');

        let dateFormatted = timeFormatted[0] + ':' + timeFormatted[1]; // We can also add the year month and day
        let maker = store.any(messageNode, FOAF('maker')).value;
        const makerName = (maker.split("://")[1]).split(".")[0];
        let isMessageReceived = (id != maker);
        let message = { id: messageNode.value, content: contentText, date: dateFormatted, received: isMessageReceived, maker: makerName };

        return message;
    }

    // Returns a list with the user friends
    async getActiveChats(chatList) {
        if (!this.session) {
            await this.getSession();
        }

        try {
            var store = $rdf.graph();
            var timeout = 5000; // 5000 ms timeout
            var fetcher = new $rdf.Fetcher(store, timeout);

            const url = this.session.webId.split('/profile')[0] + '/public/Sole/chatsIndex.ttl#this';
            const myId = this.session.webId;
            const rdfMan = this;
            fetcher.nowOrWhenFetched(url, async function (ok, body, xhr) {
                if (!ok) {
                    console.log('Oops, something happened and couldn\'t fetch data');
                } else {
                    const subject = $rdf.sym(url);
                    const chatsNodes = await store.each(subject, FLOW('participation'));
                    await chatsNodes.forEach(async (chat) => {
                        await fetcher.load(chat);
                        const chatDirection = chat.value;
                        const urlChat = chatDirection + '/index.ttl#this';
                        fetcher.nowOrWhenFetched(urlChat, async function (ok, body, xhr) {
                            const subject = $rdf.sym(urlChat);
                            const participants = await store.each(subject, FLOW('participation'));
                            if (participants != undefined) {
                                if (participants.length == 1) {
                                    let friendId = participants[0].value;
                                    if (myId == friendId) {
                                        await rdfMan.setDataForChatMaker(chatDirection, chatList);
                                    } else {
                                        await rdfMan.setDataIndividualChat(chatDirection, chatList, friendId);
                                    }
                                } else {
                                    const nameNode = await store.any(subject, N1('title'));
                                    const name = nameNode.value.split("Chat_")[1];
                                    const image = 'https://avatars.servers.getgo.com/2205256774854474505_medium.jpg';
                                    chatList.push({ direction: chatDirection, name: name, img: image, messages: [] });
                                }
                            }       
                        });
                    });
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    async setDataIndividualChat(chatDirection, chatList, friendId) {
        try {
            var store = $rdf.graph();
            var timeout = 5000; // 5000 ms timeout
            var fetcher = new $rdf.Fetcher(store, timeout);

            await fetcher.nowOrWhenFetched(friendId, async function (ok, body, xhr) {
                if (!ok) {
                    console.log('Oops, something happened and couldn\'t fetch data');
                } else {
                    const subject = $rdf.sym(friendId);
                    const nameNode = await store.any(subject, FOAF('name'));
                    let fullName = "";
                    if (nameNode == null || typeof (nameNode) === "undefined") {
                        fullName = (friendId.split("://")[1]).split(".")[0];
                    } else {
                        fullName = nameNode.value;
                    }

                    let imageNode = await store.any(subject, VCARD('hasPhoto'));
                    let image;

                    if (imageNode == undefined) {
                        image = 'https://avatars.servers.getgo.com/2205256774854474505_medium.jpg';
                    } else {
                        image = imageNode.value;
                    }

                    chatList.push({ direction: chatDirection, name: fullName, img: image, messages: [] });
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async setDataForChatMaker(direction, chatList) {
        var store = $rdf.graph();
        var timeout = 5000; // 5000 ms timeout
        var fetcher = new $rdf.Fetcher(store, timeout);
        const rdfMan = this;
        let urlChat = direction + '/index.ttl#this';
        let maker, name;

        await fetcher.nowOrWhenFetched(urlChat, async function (ok, body, xhr) {
            if (!ok) {
                console.log('Oops, something happened and couldn\'t fetch data');
            } else {
                const subject = $rdf.sym(urlChat);
                const authorNode = await store.any(subject, N1('author'));
                maker = authorNode.value;
                name = (maker.split("://")[1]).split(".")[0];

                await fetcher.nowOrWhenFetched(maker, async function (ok, body, xhr) {
                    if (!ok) {
                        console.log('Oops, something happened and couldn\'t fetch data');
                    } else {
                        const subject = $rdf.sym(maker);

                        const imageNode = await store.any(subject, VCARD('hasPhoto'));
                        let image;
                        if (imageNode == null || typeof (imageNode) === "undefined") {
                            image = 'https://avatars.servers.getgo.com/2205256774854474505_medium.jpg';
                        } else {
                            image = imageNode.value;
                        }

                        chatList.push({ direction: direction, name: name, img: image, messages: [] });
                    }
                });
            }
        });

    }

}
