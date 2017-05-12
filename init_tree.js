var treeItemRepo = new TreeItemRepository({url: 'https://cloud.coderat.cc/bring_it_on' })

var renderStuff = function() {
	jQuery('.parent').text(treeItemRepo.treeItems["0.1"].text);
	jQuery('.child1').text(treeItemRepo.treeItems["0.1"].children[0].text);
	jQuery('.child2').text(treeItemRepo.treeItems["0.1"].children[1].text);
}

jQuery(document).ready(function() {
});
