// Change the text in the first element with the article_header class 
const firstArticleHeader = document.querySelector(".article__header");
firstArticleHeader.textContent = "Welcome to the Lauren Riddle blog";

// Change the class for all elements with the article_header class to article__header important
const classChange = document.querySelectorAll(".article__header");

for (let i = 0; i < classChange.length; i++) {
   classChange[i].classList.add("important");
  }

// Obtain a reference the element with a class of dashed and remove it
const removeDashed = document.querySelector(".dashed")
removeDashed.remove("dashed")

// Obtain a reference the element with a class of article_footer and add the class of goldenrod it
const goldenrodClass = document.querySelector(".article__footer")
goldenrodClass.classList.add("goldenrod")