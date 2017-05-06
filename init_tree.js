console.log('Yeah!')

var liste = [
     new Treeitem("1-1","balbla",["2-2","2-1"],[]),
     new Treeitem("1-2","balbla",["2-2","2-1"], []),
     new Treeitem("2-2","balbla",[], ["1-1"]),
     new Treeitem("2-1","balbla",[], ["1-2"])
     ];

console.log(liste)

var treeItemRepo = new TreeItemRepository({url: 'http://lpkb.menkent.uberspace.de/bring_it_on' })
