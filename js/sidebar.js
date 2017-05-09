/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function toggleSidebar() {
  var sidebarOpen = jQuery('.sidebar').hasClass('open');
  if (sidebarOpen) {
    jQuery('.sidebar').width(0);
    jQuery('.main-content').css({left: 0});
    jQuery('.sidebar').removeClass('open');
    jQuery('.toggle-sidebar').text('Bisherige Auswahl zeigen');

  } else {
    jQuery('.sidebar').width(300);
    jQuery('.main-content').css({left: 300});
    jQuery('.sidebar').addClass('open');
    jQuery('.toggle-sidebar').text('Bisherige Auswahl verstecken');
  }
}
