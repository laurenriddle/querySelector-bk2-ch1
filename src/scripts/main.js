// Change the text in the first element with the article_header class 
const firstArticleHeader = document.querySelector(".article__header");
firstArticleHeader.textContent = "Welcome to the Lauren Riddle blog";

// Change the class for all elements with the article_header class to article__header important
const classChange = document.querySelectorAll(".article__header");

for (let i = 0; i < classChange.length; i++) {
   classChange[i].classList.add("important");
  }
