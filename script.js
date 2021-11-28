var myNav = document.querySelector("header");

window.onscroll = function() {
    var top = window.scrollY;
    console.log(top);
    if(top >= 100){
        myNav.classList.add("active");
        document.querySelector(".top_button").style.visibility="visible";
    }
    else{
        myNav.classList.remove("active");  
        document.querySelector(".top_button").style.visibility="hidden";

    }
}