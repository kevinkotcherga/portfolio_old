// DARK MODE

$('#body').toggleClass(localStorage.toggled);

function darkLight() {
  if (localStorage.toggled != 'dark') {
    $('#body').toggleClass('dark', true);
    localStorage.toggled = "dark";

  } else {
    $('#body').toggleClass('dark', false);
    localStorage.toggled = "";
  }
}

if ($('body').hasClass('dark')) {
   $( '#checkBox' ).prop( "checked", true )
} else {
  $( '#checkBox' ).prop( "checked", false )
}

// ACTIVE NAV BAR

const currentLocation = location.href;
const menuItem = document.getElementsByClassName('active-bar');
const menuLength = menuItem.length
for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "active"
  }
}
