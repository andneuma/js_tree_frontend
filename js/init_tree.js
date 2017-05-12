var treeItemRepo = new TreeItemRepository(data);

jQuery(document).ready(function() {
  // Enable BS tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Render next / previous items on click
  jQuery('.choices').on('click', '.choice', function() {
    var nextItemId = jQuery(this).attr('next-item-id');
    var nextItem = treeItemRepo.treeItems[nextItemId];
    var fromChoice = jQuery(this);

    treeItemRepo.goToItem(fromChoice, nextItem);
  });

  // Back button
  jQuery('.back-button').on('click', function() {
    if (treeItemRepo.history.length > 0) {
      treeItemRepo.goBack();
    }
  });

  // Sidebar button
  jQuery('.toggle-sidebar').on('click', function() {
    if (treeItemRepo.history.length > 0) {
      toggleSidebar();
    }
  });

  // Reset button
  jQuery('.reset-button').on('click', function() {
    if (treeItemRepo.history.length > 0) {
      treeItemRepo.resetTree();
    }
  });

  jQuery('.close-sidebar').on('click', function() {
    closeSidebar();
  });
});
