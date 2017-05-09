class ChoiceItem{
  constructor(text, nextItemId) {
    this.text = text;
    this.nextItemId = nextItemId
  }
}

class Treeitem {
  constructor(id, text, heading, choices, parents, tree) {
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

  // Render tree item
  renderSelf() {
    var delayTime = 50;
    // Draw reset button
    jQuery('.reset').hide().fadeIn(delayTime);

    // Draw statement
    var parentDiv = jQuery('.parent');
    var heading = this.nl2br(this.heading);
    var statement = this.nl2br(this.statement);

    parentDiv.find('.parent_heading').html(heading);
    parentDiv.find('.parent_text').html(statement);
    parentDiv.hide().fadeIn(delayTime);

    // Draw choices
    var choiceTemplate = jQuery('.choice-template');

    // Remove all choices
    jQuery('.choice').remove();

    // Draw choices
    this.choices.forEach((choice) => {
      var choiceDiv = jQuery('.choice-template').clone().removeClass('choice-template').addClass('choice');
      var choiceText = this.nl2br(choice.text);
      choiceDiv.attr('next-item-id', choice.nextItemId);
      choiceDiv.find('.choice_text').html(choiceText);
      choiceDiv.insertAfter(choiceTemplate).fadeIn(delayTime);
    });

    // Hide elements (template, buttons, etc.)
    choiceTemplate.hide();
    if (this.parents.length === 0) {
      jQuery('.back').hide();
    } else {
      jQuery('.back').fadeIn(delayTime);
    }
  }
}
