let closer = document.querySelector("#closer");
closer.onclick = () => {
  closer.style.display = "none";
  navbar.classList.remove("active");
  cart.classList.remove("active");
  loginForm.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  closer.style.display = "block";
  navbar.classList.toggle("active");
};



let searchForm = document.querySelector(".header .search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
};

let slides = document.querySelectorAll(".home .slides-container .slide");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}
function prev (){
  slides[index].classList.remove('active')
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active')
}

// const animate = ScrollReveal({
//   origin: 'top',
//   distance: '65px',
//   duration: '2600',
//   delay: '400'
// });

// animate.reveal(".banner-container,.banner,.footer,.box-container,.box", { origin: "left"})

// animate.reveal(".box a,.products,.title,.box-container,.box,.icons,.image,.content,.price,.stars", { origin: "right"})

// animate.reveal(".home-img,.text-center,.services-content,.features-middle,.end-text1,.end-text2,.contact-box", {interval: 150})