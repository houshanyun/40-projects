import "./index.scss";
import menu from "./app";

const product = document.querySelector(".product") as HTMLElement;
const photo = document.querySelector(".photo") as HTMLElement;
const name = document.querySelector(".product-name") as HTMLElement;
const price = document.querySelector(".product-price") as HTMLElement;
const text = document.querySelector(".product-text") as HTMLElement;
type Obj = {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
};
let displayItem = menu.map((items: Obj): string => {
  return `
        <figure class="product-photo">
          <img class="photo" src=${items.img} alt="" />
        </figure>
        <article>
          <div class="product-title">
            <h3 class="product-name">${items.title}</h3>
            <h3 class="product-price">${items.price}</h3>
          </div>
          <div class="product-description">
            <p class="product-text">${items.desc}</p>
          </div>
        </article>`;
});
const displayContent: string = displayItem.join("");
product.innerHTML = displayContent;
