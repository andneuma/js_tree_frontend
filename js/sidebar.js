/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function toggleSidebar() {
  var sidebarOpen = jQuery('.sidebar').hasClass('open');
  if (sidebarOpen) {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main-content").style.marginLeft = "0";
    jQuery('.sidebar').removeClass('open');
    jQuery('.toggle-sidebar').text('Bisherige Auswahl zeigen');

  } else {
    document.getElementById("sidebar").style.width = "450";
    document.getElementById("main-content").style.marginLeft = "450";
    jQuery('.sidebar').addClass('open');
    jQuery('.toggle-sidebar').text('Bisherige Auswahl verstecken');
  }
}
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {

}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {

}
