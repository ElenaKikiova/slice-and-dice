let collapseButton = document.getElementById("collapseButton");
let collapsable = document.getElementById("collapsable");

let links = document.getElementsByTagName("li");

let works = document.getElementsByClassName("work");

let slide = document.getElementById("slide");
let quotePhoto = document.getElementById("quotePhoto");
let quoteText = document.getElementById("quoteText");
let author = document.getElementById("author");
let activeSlide = 1;

// Data for the carousel

let slides = [

  {
    "quote": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laboriosam impedit vero Possimus?",
    author: "SUSAN SIMS, INTERACTION DESIGNER AT XYZ "
  },
  {
    "quote": "Ipsum dolor sit amet consectetur adipisicing elit. Sequi laboriosam impedit vero",
    "author": "BEVERLY LITTLE"
  }, 
  {
    "quote": "Commodi dolorum veniam quas iure saepe,Commodi dolorum veniam quas iure saepe",
    "author": "TIMOTHEE REED "
  }, 
  {
    "quote": "Sequi laboriosam impedit vero Possimus?Sequi laboriosam impedit vero Possimus?",
    "author": "SOME SMART GUY"
  },
  {
    "quote": "Aliquid modi blanditiis quasi provident. Commodi dolorum veniam quas iure saepe",
    "author": "VICTORIA VALDEZ"
  }

]


collapseButton.onclick = () => {showHideCollapsable()};


function showHideCollapsable(){

  console.log(collapsable)

  if(collapsable.style.opacity == 0){
    collapsable.style.opacity = 1;
  }
  else{
    collapsable.style.opacity = 0;
  }
  
}


for(let i = 0; i < links.length; i++){
  links[i].onclick = () => {goToSection(links[i].getAttribute("data-goto"))};
}

function goToSection(id){

  let sectionOffset = document.getElementById(id).offsetTop;

  window.scrollTo({
    top: sectionOffset,
    left: 0,
    behavior: 'smooth'
  });

}

for(let i = 0; i < works.length; i++){
  works[i].onmouseover = () => {showCaption(works[i])};
  works[i].onmouseleave = () => {hideCaption(works[i])};
}

function showCaption(work){
  let backdrop = work.getElementsByClassName("backdrop")[0];
  let caption = work.getElementsByClassName("caption")[0];
  backdrop.style.opacity = 1;
  caption.style.opacity = 1;
}

function hideCaption(work){
  let backdrop = work.getElementsByClassName("backdrop")[0];
  let caption = work.getElementsByClassName("caption")[0];
  backdrop.style.opacity = 0;
  caption.style.opacity = 0;
}

let carousel_dots = document.getElementsByClassName("dot");

for(let i = 0; i < carousel_dots.length; i++){
  carousel_dots[i].onclick = () => {changeSlide(carousel_dots[i].getAttribute("data-id"))};
}

function changeSlide(id){
  console.log(id);
  if(activeSlide != id){
    slide.style.opacity = 0;
    activeSlide = id;
    slideInfo = slides[id - 1];

    console.log(slideInfo.author, author.innerHTML)

    setTimeout(() => {

      quotePhoto.src = "images/carousel-" + id + ".jpg";
      quoteText.innerHTML = slideInfo.quote;
      author.innerHTML = slideInfo.author;
      document.getElementById("active").id = null;
      document.querySelector(".dot[data-id='" + id + "'").id = "active";

      slide.style.opacity = 1;

    }, 300);
  }
}