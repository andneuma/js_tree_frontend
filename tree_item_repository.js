class TreeItemRepository{
	constructor(treeItemsQuery){
		this.treeItemsQuery = treeItemsQuery;
		this.treeItems = {}; // could be crazy new es6 Map type
		this.fetchTreeItems();	
	}

	fetchTreeItems(){
		//TODO add http error handling remove unnessecarry object parsing
		jQuery.get(this.treeItemsQuery, (data) => {
			this.convertJsonToTreeItems(data);
			this.createMeshNet();
			renderStuff();
		}).fail(
			() => {console.log('Request tget data failed')}
			);
	}

	convertJsonToTreeItems(rawJson){
		// could this be a static function which gets a json set and class def?
		rawJson.forEach((jsonItem) => {
			this.treeItems[jsonItem.id] = 
				new Treeitem(jsonItem.id,jsonItem.text,jsonItem.children,jsonItem.parents);
		});
	}


	createMeshNet() {

		for (var i = Object.keys(this.treeItems).length - 1; i >= 0; i--) {
			var treeItemId = Object.keys(this.treeItems)[i];
			var treeItem = this.treeItems[treeItemId];
			treeItem.parents = this.findRelatedObjectById(treeItem.parents);
			treeItem.children= this.findRelatedObjectById(treeItem.children);
		}
	}

	findRelatedObjectById(ids) {
		return ids.map((id) => { return this.treeItems[id] } );
	}
}
