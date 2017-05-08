class TreeItemRepository{
  constructor(data){
    this.rawData = data;
    this.treeItems = {}; // could be crazy new es6 Map type
    this.serialiseDirectly();
  }

  // Fetch JSON from external ressource (makes no sense for static data)
  fetchTreeItems(){
    //TODO add http error handling remove unnessecarry object parsing
    jQuery.get(this.treeItemsQuery, (data) => {
      this.convertJsonToTreeItems(data);
      this.createMeshNet();
    }).fail(
      () => {console.log('Request tget data failed')}
      );
  }

  // Serialise JSON data directly if ressource passed is already JSON
  serialiseDirectly(){
    this.convertJsonToTreeItems(this.rawData);
    this.createMeshNet();
    // Set current item initally
    var firstItemId = Object.keys(this.treeItems)[0];
    var firstItem = this.treeItems[firstItemId];
    this.currentItem = firstItem;
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
