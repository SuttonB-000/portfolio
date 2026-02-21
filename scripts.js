//hamburger menu
//identify button
let menuButton = document.getElementById("menu"); 

//function of what I want to do 
function menuDrop() {
    var menuContent = document.getElementById("menuContent");
    menuContent.style.display = "block";
}

//add listener  to identify menu activation
menuButton.addEventListener("click", menuDrop);