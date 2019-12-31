document.querySelector(".toggler").addEventListener("click", function() {
  const categories = document.querySelector(".categories-wrapper");
  if (this.checked) {
    categories.classList.add("transform");
  } else {
    categories.classList.remove("transform");
  }
});

/* Image slide */

let slideIndex = 0;

const slide_item = [...document.querySelectorAll(".slide-item")];
const dots = [...document.querySelectorAll(".dot")];

function slide(n) {
  slide_item.map(slide => {
    slide.classList.add("slide-item");
  });

  dots.map(dot => {
    dot.classList.add();
  });

  slide_item[slideIndex].classList.remove("active");
  dots[slideIndex].classList.remove("dot-active");

  slideIndex = (n + slide_item.length) % slide_item.length;
  slide_item[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("dot-active");
}

setInterval(() => {
  nextSlide();
}, 4000);

function nextSlide() {
  slide(slideIndex + 1);
}

function prevSlide() {
  slide(slideIndex - 1);
}

slide(slideIndex);

document.querySelector(".prev").addEventListener("click", prevSlide);

document.querySelector(".next").addEventListener("click", nextSlide);
