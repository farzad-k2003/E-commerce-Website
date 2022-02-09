const productContainer = [...document.querySelectorAll(".product-container")];
const nxtBtn = document.querySelector(".nxt-btn");
const preBtn = document.querySelector(".pre-btn");

productContainer.forEach((item) => {
  let containerDimenstion = item.getBoundingClientRect();
  let containerWidth = containerDimenstion.width;
  nxtBtn.addEventListener("click", () => {
    item.scrollLeft += 500;
  });
  preBtn.addEventListener("click", () => {
    item.scrollLeft -= 500;
  });
});
