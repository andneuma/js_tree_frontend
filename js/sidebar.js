var fadeDelay = 150;

function toggleSidebar() {
  var sidebarOpen = jQuery('.sidebar').hasClass('open');
  if (sidebarOpen) {
    closeSidebar();
  } else {
    openSidebar();
  }
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main-content").style.marginLeft = "0";
  document.getElementById("header").style.marginLeft = "0";
  jQuery('.sidebar').removeClass('open');
  jQuery('.toggle-sidebar').data('title', 'Bisherige Auswahl zeigen');
}

function openSidebar() {
  document.getElementById("sidebar").style.width = "450";
  document.getElementById("main-content").style.marginLeft = "450";
  document.getElementById("header").style.marginLeft = "450";
  jQuery('.sidebar').addClass('open');
  jQuery('.toggle-sidebar').data('title', 'Bisherige Auswahl verstecken');
}

// hide overlay and control elements
function hideControlElements() {
  jQuery('.back-button').removeClass('active');
  jQuery('.toggle-sidebar').removeClass('active');
  jQuery('.reset-button').removeClass('active');
}

// show overlay and control elements
function showControlElements() {
  jQuery('.back-button').addClass('active');
  jQuery('.toggle-sidebar').addClass('active');
  jQuery('.reset-button').addClass('active');
}
