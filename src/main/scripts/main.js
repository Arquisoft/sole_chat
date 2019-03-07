var UI = {
  store: require('./store'),
  ns: require('./ns')
};

const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');

// Log the user in and out on click
const popupUri = 'popup.html';
$('#login  button').click(() => solid.auth.popupLogin({ popupUri }));
$('#logout button').click(() => solid.auth.logout());

// Update components to match the user's login status
solid.auth.trackSession(session => {
  const loggedIn = !!session;
  $('#login').toggle(!loggedIn);
  $('#logout').toggle(loggedIn);
  if (loggedIn) {
    $('#user').text(session.webId);
    // Use the user's WebID as default profile
    if (!$('#profile').val())
      $('#profile').val(session.webId);
  }
});

$('#view').click(async function loadProfile() {
  // Set up a local data store and associated data fetcher
  const store = $rdf.graph();
  const fetcher = new $rdf.Fetcher(store);
  const VCARD = new $rdf.Namespace('http://www.w3.org/2006/vcard/ns#');

  // Load the person's data into the store
  const person = $('#profile').val();
  await fetcher.load(person);

  // Display their details
  const fullName = store.any($rdf.sym(person), FOAF('name'));
  $('#fullName').text(fullName && fullName.value);

  // Display their friends
  const friends = store.each($rdf.sym(person), FOAF('knows'));
  $('#friends').empty();
  friends.forEach(async (friend) => {
    await fetcher.load(friend);
    const fullName = store.any(friend, FOAF('name'));
    $('#friends').append(
      $('<li>').append(
        $('<a>').text(fullName && fullName.value || friend.value)
          .click(() => $('#profile').val(friend.value))
          .click(loadProfile)));
  });


});

$('#view').click(async function writeMessage() {
  kb = UI.store;
  var ns = UI.ns;
  var WF = $rdf.Namespace('http://www.w3.org/2005/01/wf/flow#');
  var DCT = $rdf.Namespace('http://purl.org/dc/terms/');
  var updater = UI.store.updater;

  // titlefield.setAttribute('class','pendingedit')
  // titlefield.disabled = true
  field.setAttribute('class', 'pendingedit');
  field.disabled = true;
  var sts = [];
  var now = new Date();
  var timestamp = '' + now.getTime();
  var dateStamp = $rdf.term(now);
  // http://www.w3schools.com/jsref/jsref_obj_date.asp
  var message = kb.sym(messageStore.uri + '#' + 'Msg' + timestamp);

  sts.push(new $rdf.Statement(subject, ns.wf('message'), message, messageStore));
  // sts.push(new $rdf.Statement(message, ns.dc('title'), kb.literal(titlefield.value), messageStore))
  sts.push(new $rdf.Statement(message, ns.sioc('content'), kb.literal(field.value), messageStore));
  sts.push(new $rdf.Statement(message, DCT('created'), dateStamp, messageStore));
  if (me) sts.push(new $rdf.Statement(message, ns.foaf('maker'), me, messageStore));

  var sendComplete = function (uri, success, body) {
  };
  
  updater.update([], sts, sendComplete);
});
