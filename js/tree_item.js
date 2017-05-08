class Treeitem {
  constructor(id, text, children, parents) {
    this.id = id;
    this.text = text;
    this.children = children;
    this.parents = parents;
  }

  getNextItem() {
    this.children[0];
  }

  getPreviousItem() {
    this.parents[0];
  }

  renderSelf() {
    // Draw parent (e.g. question)
    var parentDiv = jQuery('.parent');
    parentDiv.find('.parent_heading').text('Parent ID: ' + this.id);
    parentDiv.find('.parent_text').text(this.text);

    // Draw children (e.g. choices)
    var choicesTemplate = jQuery('.choice');

    this.children.forEach(function(choice) {
      var choiceDiv = choicesTemplate.clone();
      choiceDiv.find('.choice_heading').text('Node ID: ' + choice.id);
      choiceDiv.attr('item-id', choice.id);
      choiceDiv.find('.choice_text').text(choice.text);
      choiceDiv.insertAfter(choicesTemplate).show();
    });

    choicesTemplate.remove();
  }
}
