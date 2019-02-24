class UserInSession {
	constructor(session) {
        this.session = session;
        
		this.webId = this.session.webId;

	}

	 async loadProfile() {
       this.name=await this.getName();
       // console.log(name);
       return await name;
        
        
	}

	async getName() {
		const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');

		// Set up a local data store and associated data fetcher
		const store = $rdf.graph();

		const fetcher = new $rdf.Fetcher(store);

		// Load the person's data into the store

		var person = this.webId;
		await fetcher.load(person);
		const fullName = store.any($rdf.sym(person), FOAF('name'));
       
        return  fullName.value;
       
	}
}
