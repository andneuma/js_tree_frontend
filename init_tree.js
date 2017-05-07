var treeItemRepo = new TreeItemRepository({url: 'http://lpkb.menkent.uberspace.de/bring_it_on' })

jQuery(document).ready(function() {
  // Render next / previous items on click
  jQuery('.next').on('click', function(){
    getNext(this.current_item).render();
  });

  jQuery('.back').on('click', function(){
    getPrevious(this.current_item).render();
  });
});
