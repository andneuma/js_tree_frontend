var liste = [
    new Treeitem("1-1","balbla",["2-2","2-1"],[]),
     new Treeitem("1-2","balbla",["2-2","2-1"], []),
     new Treeitem("2-2","balbla",[], ["1-1"]),
     new Treeitem("2-1","balbla",[], ["1-2"])
     ];




function findRelated(relatedIds) {

    var matches = [];

    for (var i = relatedIds.length - 1; i >= 0; i--) {

        for (var j = liste.length - 1; j >= 0; j--) {
            if (liste[j].id == relatedIds[i]) {
                matches.push(liste[j]);
            }
        };

    };

    return matches
}



for (var i = liste.length - 1; i >= 0; i--) {

    var newChildren = findRelated(liste[i].children);

    liste[i].children = newChildren;

    var newParents = findRelated(liste[i].parents);

    liste[i].parents = newParents;
};


console.log(liste)


