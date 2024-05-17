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

//product js funcitonality
var productContainer = document.getElementById("product-container");

var search = document.getElementById("search");

var productlist = productContainer.querySelectorAll("div");
console.log(productlist);

search.addEventListener("keyup", function () {
  var enteredValue = event.target.value.toUpperCase();
  for (let count = 0; count < productlist.length; count++) {
    var productName = productlist[count].querySelector("h2").textContent;
    //thie belopw condition is used to check the whether the entered value in the inputbox and the h2 content are same
    if (productName[count].toUpperCase().indexOf(enteredValue) < 0) {
      //if yes it turns the display property to none
      productlist[count].style.display = "none";
    } else {
      //if yes it turns the display property to block
      productlist[count].style.display = "block";
    }
  }
});
