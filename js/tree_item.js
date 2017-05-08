class ChoiceItem{
  constructor(text, nextItemId) {
    this.text = text;
    this.nextItemId = nextItemId
  }
}

class Treeitem {
  constructor(id, text, heading, choices, parents) {
    this.id = id;
    this.heading = heading;
    this.statement = text;
    this.choices = choices;
    this.parents = parents;
  }

  // Text to HTML + replace \n in JSON with <br>s
  nl2br(text) {
    var htmls = [];
    var lines = text.split(/\n/);

    var tmpDiv = jQuery(document.createElement('div'));
    for (var i = 0 ; i < lines.length ; i++) {
      htmls.push(tmpDiv.text(lines[i]).html());
    }
    return htmls.join("<br>");
  }

  renderSelf() {
    // Draw statement
    var parentDiv = jQuery('.parent');
    var heading = this.nl2br(this.heading);
    var statement = this.nl2br(this.statement);

    parentDiv.find('.parent_heading').html(heading);
    parentDiv.find('.parent_text').html(statement);

    // Create div template
    var choiceTemplate = jQuery('.choice-template');
    jQuery('.choice').remove();

    // Remove all choices
    // Draw choices
    var nl2br = this.nl2br;

    this.choices.forEach(function(choice) {
      var choiceDiv = jQuery('.choice-template').clone().removeClass('choice-template').addClass('choice');
      var choiceText = nl2br(choice.text);
      choiceDiv.attr('next-item-id', choice.nextItemId);
      choiceDiv.find('.choice_text').html(choiceText);
      choiceDiv.insertAfter(choiceTemplate).show();
    });

    choiceTemplate.hide();
  }
}
