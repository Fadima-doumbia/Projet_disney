
    var navbar = document.querySelector(".navbar")
    navbar.style.display = "none";
    window.addEventListener('scroll', function(e) {
      if (window.scrollY > 300) {
        navbar.style.display = "flex";
      } else {
        navbar.style.display = "none";
      }
    });

    if(window.matchMedia("(max-width:1024px)").matches){
var footer = document.querySelector(".telephone")
footer.style.display = "none";
console.log("ca rentre")
window.addEventListener('scroll', function(e){
  console.log("fonction")
  if (window.scrollY > 300 || window.scrollY < 500) {
    console.log("premier")
    footer.style.display = "flex";
  }else{
    console.log("deux")
    footer.style.display = "none";
  }
});
    }
