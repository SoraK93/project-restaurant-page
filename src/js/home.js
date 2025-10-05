import topViewRamen from "../assets/top-view-ramen-bowls.jpg";

const pageContent = {
  shop: {
    description: `Our ramen shop is a culinary destination dedicated to the art of
        ramen, serving Japanese noodle soup with a focus on authentic,
        flavorful broth, springy noodles, and fresh, carefully selected
        toppings. We offer a diverse menu with regional ramen styles like the
        rich, hearty Sapporo Miso Ramen or the delicate, soy-flavored
        Tokyo-style ramen, ensuring a unique taste for every palate. Beyond
        the signature dishes, our shop provides a warm, welcoming atmosphere,
        similar to traditional Japanese ramen-ya, inviting guests to savor
        each slurpable, satisfying bowl.`,
  },
  dish: {
    heading: "A Symphony of Flavors and Textures",
    description: `At our ramen shop, the journey begins with the broth, the soul of
        the dish. We craft these rich, complex liquids through a slow,
        meticulous process, allowing hours of simmering to extract the
        deepest flavors from bone, meat, and vegetables, creating a balanced
        base that defines our ramen. The noodles are equally important, made
        with the alkaline solution kansui to give them their signature
        yellow hue, springy texture, and slight chewiness that holds up
        perfectly in the hot broth.`,
    img: topViewRamen,
    imgAlt: "top view of two ramen dish",
  },
};

const home = document.createElement("div");
home.classList.add("home");

// Shop description
const shopDescription = document.createElement("div");
shopDescription.classList.add("shop-description");
home.appendChild(shopDescription);

const paraShopDescription = document.createElement("p");
paraShopDescription.textContent = pageContent.shop.description;
shopDescription.appendChild(paraShopDescription);

// Dish description
const dishDescription = document.createElement("div");
dishDescription.classList.add("dish-description");
home.appendChild(dishDescription);
// dishDiv1
const containerDishDescription1 = document.createElement("div");
dishDescription.appendChild(containerDishDescription1);

const headingDishDescription = document.createElement("h1");
headingDishDescription.textContent = pageContent.dish.heading;
containerDishDescription1.appendChild(headingDishDescription);

const paraDishDescription = document.createElement("p");
paraDishDescription.textContent = pageContent.dish.description;
containerDishDescription1.appendChild(paraDishDescription);
// dishDiv2
const containerDishDescription2 = document.createElement("div");
dishDescription.appendChild(containerDishDescription2);

const imgDishDescription = document.createElement("img");
imgDishDescription.setAttribute("src", pageContent.dish.img);
imgDishDescription.setAttribute("aria-hidden", "true");
containerDishDescription2.appendChild(imgDishDescription);

const content = document.querySelector("#content");
content.appendChild(home);
