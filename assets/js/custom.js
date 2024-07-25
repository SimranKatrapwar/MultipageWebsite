// About Page Section
let aboutParas = document.getElementsByClassName("about-para");
let aboutBtns = document.getElementsByClassName("about-btn");

function showReview() {
  for (aboutLinks of aboutBtns) {
    aboutLinks.classList.remove("active-btn");
  }
  for (aboutTexts of aboutParas) {
    aboutTexts.classList.remove("active-text");
  }
  let i = Array.from(aboutBtns).indexOf(event.target);

  aboutBtns[i].classList.add("active-btn");
  aboutParas[i].classList.add("active-text");
}

// FAQ
const btns = document.querySelectorAll(".acc-btn");
// fn
function accordion() {
  // this = the btn | icon & bg changed
  this.classList.toggle("is-open");

  // the acc-content
  const content = this.nextElementSibling;

  // IF open, close | else open
  if (content.style.maxHeight) content.style.maxHeight = null;
  else content.style.maxHeight = content.scrollHeight + "px";
}
// event
btns.forEach((el) => el.addEventListener("click", accordion));

// Scroll to top Button
$(document).ready(function () {
  $('.go-top').hide(0)

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.go-top').fadeIn(150);
    } else {
      $('.go-top').fadeOut(150);
    }
  });
  $('.go-top').click(function () {
    event.preventDefault();

    $('html , body').animate({ scrollTop: 0 }, 1000);
  });
});


