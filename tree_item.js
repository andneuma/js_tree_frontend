class Treeitem {
  constructor(id, text, children, parents) {
    this.id = id;
    this.text = text;
    this.children = children;
    this.parents = parents;
  }

  render() {
    jQuery('.parent').text(this.text);
    jQuery('.child1').text(this.children[0].text);
    jQuery('.child2').text(this.children[1].text);
  }
}
