class TreeItemRepository{
	constructor(treeItemsQuery){
		this.treeItemsQuery = treeItemsQuery;
		this.treeItems = {}; // could be crazy new es6 Map type		
		// start rendering stuff when dom is ready and ajax call is processed
		Promise.all([this.fetchTreeItems(),this.checkDomReady()])
		.then(()=>{renderStuff()});	
	}

	checkDomReady(){
		return new Promise(function(resolve, reject) {
			if (document.readyState === 'complete') {
				resolve(document);
			} else {
				document.addEventListener('DOMContentLoaded', function(){
					resolve(document);
				});
			}
		});
	}

	fetchTreeItems(){
		//TODO add http error handling remove unnessecarry object parsing
		return fetch(this.treeItemsQuery.url)
			.then((response)=>{
				if (response.status !== 200) {  
				console.log('Request tget data failed. Status Code: ' +  
				  response.status);  
				return;  
				}
				return response.json().then((data)=> {  
				    // console.log(data);  
					this.convertJsonToTreeItems(data);
					this.createMeshNet();
				  });  
			});

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



