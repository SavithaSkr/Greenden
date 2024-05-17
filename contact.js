//selecting side navbar, MenuIcon
var sidenav = document.getElementById("sidenav"); //sidenav menu
var menuicon = document.getElementById("menuicon"); //menu icon
var closenav = document.getElementById("closenav"); //close button

menuicon.addEventListener("click", function () {
  sidenav.style.right = "0";
});
closenav.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});
