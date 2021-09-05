window.addEventListener("load", () => {
  document.querySelector(".loader").classList.add("remove-loader");
  setTimeout(() => {
   document.querySelector(".logo_video").classList.remove("logo_video_zoom");
  }, 5000);
});
var navbar = document.querySelector(".menu_list");

document.querySelector(".menu-btn").addEventListener("click", () => {
  navbar.classList.add("show-menu");
});
document.querySelector(".close-btn").addEventListener("click", () => {
  navbar.classList.remove("show-menu");
});
/*
 *javascript slider for boxes
 * */
const track = document.querySelector(".para-box");
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("show-boxes");
  targetSlide.classList.add("show-boxes");
};
console.log(slideWidth);
document.getElementById("b1").addEventListener("click", () => {
  const currentSlide = track.querySelector(".show-boxes");
  if (!currentSlide) {
    document.querySelectorAll(".boxes")[0].classList.add("show-boxes");
      slides[0].style.left = 0;
  } else {
    const changeSlide = slides[0];
    moveToSlide(track, currentSlide, changeSlide);
  }
});
document.getElementById("b2").addEventListener("click", () => {
  const currentSlide = track.querySelector(".show-boxes");
  if (!currentSlide) {
    document.querySelectorAll(".boxes")[1].classList.add("show-boxes");
      slides[1].style.left = 0;
  } else {
    const changeSlide = slides[1];
    moveToSlide(track, currentSlide, changeSlide);
  }
});
document.getElementById("b3").addEventListener("click", () => {
  const currentSlide = track.querySelector(".show-boxes");
  if (!currentSlide) {
    document.querySelectorAll(".boxes")[2].classList.add("show-boxes");
      slides[2].style.left = 0;
      
  } else {
    const changeSlide = slides[2];
    moveToSlide(track, currentSlide, changeSlide);
  }
});
