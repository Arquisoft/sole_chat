class UserInSession {
	constructor(session) {
		this.webId = session.webId;
		console.log(this.webId)
		this.name;
		
	}

	async loadProfile() {
		console.log("Loading profile...0%");
		this.name = await this.getProfileAttribute('name');
		console.log("Profile ["+this.name+ "] loaded 100%");
		
	}



	async getProfileAttribute(campo) {
		const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');

		// Set up a local data store and associated data fetcher
		const store = $rdf.graph();

		const fetcher = new $rdf.Fetcher(store);

	
		await fetcher.load(this.webId);

		return  store.any($rdf.sym(this.webId), FOAF(campo)).value;
	}
}
