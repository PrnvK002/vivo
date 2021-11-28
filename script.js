var myNav = document.querySelector(".navbar");
var myFont = document.querySelectorAll(".nav-link");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
      
      myNav.classList.add("active");
      document.querySelector(".top_button").style.visibility = "visible";
      myFont.forEach((element)=>{
          element.classList.add("change_color");
      });
  } else {
     
      myNav.classList.remove("active");
      document.querySelector(".top_button").style.visibility = "hidden";
      myFont.forEach((element)=>{
          element.classList.remove("change_color");
      });
  }
}
