class ChoiceItem{
  constructor(text, nextItemId) {
    this.text = text;
    this.nextItemId = nextItemId
  }
}

class Treeitem {
  constructor(id, text, choices, parents) {
    this.id = id;
    this.statement = text;
    this.choices = choices;
    this.parents = parents;
  }

  renderSelf() {
    // Draw statement
    var parentDiv = jQuery('.parent');
    parentDiv.find('.parent_heading').text('Parent ID: ' + this.id);
    parentDiv.find('.parent_text').text(this.statement);

    // Create div template
    var choiceTemplate = jQuery('.choice-template');
    jQuery('.choice').remove();

    // Remove all choices
    // Draw choices
    this.choices.forEach(function(choice) {
      var choiceDiv = jQuery('.choice-template').clone().removeClass('choice-template').addClass('choice');
      choiceDiv.attr('next-item-id', choice.nextItemId);
      choiceDiv.find('.choice_text').text(choice.text);
      choiceDiv.insertAfter(choiceTemplate).show();
    });

    choiceTemplate.hide();
  }
}
