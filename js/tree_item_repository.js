class TreeItemRepository{
  constructor(data){
    this.rawData = data;
    this.treeItems = {}; // could be crazy new es6 Map type
    this.serialiseDirectly();
    this.history = [];
  }

  resetTree() {
    var firstItemId = Object.keys(this.treeItems)[0];
    var firstItem = this.treeItems[firstItemId];
    this.currentItem = firstItem;
    this.currentItem.renderSelf();

    // Remove history
    this.history = [];

    // Clean sidepanel
    jQuery('.sidebar .panel').remove();
    closeSidebar();

    // Deactivate buttons
    hideControlElements();
  }

  goBack() {
    var previousItem = this.history[this.history.length - 1];
    this.currentItem = previousItem;
    this.currentItem.renderSelf();
    this.history.pop(previousItem);
    jQuery('.sidebar .panel').last().remove();

    if (this.history.length === 0) {
      closeSidebar();
      hideControlElements();
    }
  }


  addChoiceToSidebar(statement, heading, choice) {
    jQuery('.sidebar').
      append('<div class="panel history-item"><div class="panel-heading history-item-heading">' + heading
          + '</div><div class="panel-body history-item-text">' + statement
          + '</div><div class="panel-footer history-item-choice">' + choice + '</div>');
  }

  goToItem(fromChoice, toItem) {
    var currentItem = this.currentItem;
    var choiceText = fromChoice.text();
    var currentItemHeading = currentItem.heading;
    var currentItemStatement= currentItem.statement;
    this.addChoiceToSidebar(currentItemStatement, currentItemHeading, choiceText);

    this.history.push(currentItem);
    this.currentItem = toItem;
    toItem.renderSelf();

    // Draw other elements
    showControlElements();
  }

  // Serialise JSON data directly if ressource passed is already JSON
  serialiseDirectly(){
    this.convertJsonToTreeItems(this.rawData);
    this.createMeshNet();
    // Set current item initally
    this.resetTree();
  }

  convertJsonToTreeItems(rawJson){
    // could this be a static function which gets a json set and class def?
    rawJson.forEach((jsonItem) => {
      this.treeItems[jsonItem.id] = 
        new Treeitem(jsonItem.id, jsonItem.statement, jsonItem.heading, jsonItem.choices, jsonItem.parents);
    });
  }

  createMeshNet() {
    for (var i = Object.keys(this.treeItems).length - 1; i >= 0; i--) {
      var treeItemId = Object.keys(this.treeItems)[i];
      var treeItem = this.treeItems[treeItemId];
      treeItem.parents = this.findRelatedObjectById(treeItem.parents);
    }
  }

  findRelatedObjectById(ids) {
    return ids.map((id) => { return this.treeItems[id] } );
  }
}
