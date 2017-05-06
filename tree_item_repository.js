class TreeItemRepository{
    constructor(treeItemsQuery){
        this.treeItemsQuery = treeItemsQuery;
		this.treeItems = [];
		this.fetchTreeItems();	
    }

    fetchTreeItems(){
      	var func =  this.convertJsonToTreeItems
		 console.log('lets fetch this shit');
        //TODO add http error handling 
		jQuery.get(this.treeItemsQuery, function(data) {
			func(data);
		});
    }
    
    convertJsonToTreeItems(rawJson){
    // could this be a static function which gets a json set and class def?
	 	treeItems = rawJson.map( function(jsonItem){
			new Treeitem(jsonItem.id,jsonItem.text,jsonItem.children,jsonItem.parents);		
		});	
    }


    createMeshNet(){

    }
}

//function findRelated(relatedIds) {
//
//    var matches = [];
//
//    for (var i = relatedIds.length - 1; i >= 0; i--) {
//
//        for (var j = liste.length - 1; j >= 0; j--) {
//            if (liste[j].id == relatedIds[i]) {
//                matches.push(liste[j]);
//            }
//        };
//
//    };
//
//    return matches
//}
//
//
//
//for (var i = liste.length - 1; i >= 0; i--) {
//
//    var newChildren = findRelated(liste[i].children);
//
//    liste[i].children = newChildren;
//
//    var newParents = findRelated(liste[i].parents);
//
//    liste[i].parents = newParents;
//};


