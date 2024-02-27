const categoriesNumber = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesNumber.length}`);

const titles = document.querySelectorAll("h2");
titles.forEach(function (title) {
    const categoryName = title.textContent;
    console.log(`Category: ${categoryName}`);
    const categoriesElements = title.parentElement.querySelectorAll("ul > li");
     console.log(`Elements: ${categoriesElements.length}`);
});

