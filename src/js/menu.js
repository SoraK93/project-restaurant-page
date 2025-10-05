import "../css/menu.css";
import sapporoMiso from "../assets/sapporo-special-miso-ramen.webp";
import tokyoShoyu from "../assets/tokyo-shoyu-ramen.jpg";
import tonkotsuRamen from "../assets/tonkotsu-ramen-bowl-ramen.jpeg";
import nikuUdon from "../assets/niku-udon.jpg";

const menuList = [
  {
    name: "Sapporo Miso Ramen",
    description: `A hearty and warming option, perfect for a chilly day, featuring a salty, rich miso base, butter, corn, and sprouts.`,
    price: 2500,
    img: sapporoMiso,
  },
  {
    name: "Tokyo Shoyu Ramen",
    description: `A classic, showcasing a delicate, soy-flavored chicken broth, sometimes with a hint of dashi, served with thin, curly noodles.`,
    price: 3200,
    img: tokyoShoyu,
  },
  {
    name: "Tonkotsu Ramen Broth",
    description: `This deeply satisfying, umami-packed, lip-smacking ramen broth is loaded with complex flavors and slurpy deliciousness.`,
    price: 3500,
    img: tonkotsuRamen,
  },
  {
    name: "Niku Udon (Beef Edition)",
    description: `The thinly shaved beef cooked in the savoury-sweet umami flavoured sauce topped on thick udon noodles in a light soup broth makes the perfect combination for a heartwarming dish.`,
    price: 3900,
    img: nikuUdon,
  },
];

function createItem(item, element, pelement) {
  let card = document.createElement(element);
  card.textContent = item;
  pelement.appendChild(card);
}

const menu = document.createElement("div");
menu.classList.add("menu");

const menuHeadingContainer = document.createElement("div");
menuHeadingContainer.classList.add("menu-intro");

const menuHead = document.createElement("h2");
menuHead.textContent = "A Menu for Every Craving";
menuHeadingContainer.appendChild(menuHead);

const menuPara = document.createElement("p");
menuPara.textContent =
  "Our menu features a range of styles to cater to different preferences.";
menuHeadingContainer.appendChild(menuPara);

menu.appendChild(menuHeadingContainer);

let itemContainer = document.createElement("div");
itemContainer.classList.add("item-container");

menuList.forEach((item) => {
  let itemDetails = document.createElement("div");
  itemDetails.classList.add("item-details");
  createItem(item.name, "h3", itemDetails);
  createItem(item.description, "p", itemDetails);
  createItem(`¥${item.price}`, "p", itemDetails);

  let itemImg = document.createElement("div");
  itemImg.classList.add("item-img");
  let img = document.createElement("img");
  img.setAttribute("src", item.img);
  img.setAttribute("alt", "");
  img.setAttribute("aria-hidden", "true");
  itemImg.appendChild(img);

  let items = document.createElement("div");
  items.classList.add("items");
  items.appendChild(itemDetails);
  items.appendChild(itemImg);
  itemContainer.appendChild(items);
});

menu.appendChild(itemContainer);

export default menu;
