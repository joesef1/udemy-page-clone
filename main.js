

  function myFunction() {
    const fog =document.getElementsByClassName("fog")[0]

  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
    fog.style.display="block"

  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
    fog.style.display="none"
  }
}




function myFunction2() {
  // const fog2 =document.getElementsByClassName("fog")[0]
  const fog2 =document.getElementsByClassName("fog2")[0]


var dots2 = document.getElementById("dots2");
var moreText2 = document.getElementById("more2");
var btnText2 = document.getElementById("myBtn2");

if (dots2.style.display === "none") {
dots2.style.display = "inline";
btnText2.innerHTML = "Read more"; 
moreText2.style.display = "none";
fog2.style.display="block"

} else {
dots2.style.display = "none";
btnText2.innerHTML = "Read less"; 
moreText2.style.display = "inline";
fog2.style.display="none"
}

}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

}