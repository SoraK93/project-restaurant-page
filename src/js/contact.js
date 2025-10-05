import "../css/contact.css";
import { createItem } from "./utilities";

const contactList = {
  shop: {
    address:
      "123, Hogsmeade, located near Hogwarts School of Witchcraft and Wizardry. ",
  },
  Booking: {
    mobile: "123456789",
    email: "booktable@ramenshop.com",
  },
  Manager: {
    mobile: "123456789",
    email: "goodfood@ramenshop.com",
  },
  Owner: {
    mobile: "123456789",
    email: "makingramen@ramenshop.com",
  },
};

const contact = document.createElement("div");
contact.classList.add("contact");

// address
const address = document.createElement("div");
address.classList.add("address");

createItem("Shop Address: ", "h2", address);
createItem(contactList.shop.address, "p", address);

// contact info
const contactContainer = document.createElement("div");
contactContainer.classList.add("contact-container");

Object.entries(contactList).forEach(([key, value]) => {
  const contactCard = document.createElement("div");
  contactCard.classList.add("contact-info")

  if (key !== "shop") {
    createItem(key, "p", contactCard);
    createItem(`Phone No.: ${value.mobile}`, "p", contactCard);
    createItem(`Email ID: ${value.email}`, "p", contactCard);
    contactContainer.appendChild(contactCard);
  }

//   const hr = document.createElement("hr");
//   contactCard.appendChild(hr)
});

// remove extra hr element
// contactContainer.children[2].children[2].remove()

contact.appendChild(address);
contact.appendChild(contactContainer);

export default contact;
