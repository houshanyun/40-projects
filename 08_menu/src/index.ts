import "./index.scss";
import menu from "./app";

const wrap = document.querySelector(".wrap") as HTMLElement;
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
      <section class="product">
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
        </article>
      </section>`;
});
const displayContent: string = displayItem.join("");
wrap.innerHTML = displayContent;
