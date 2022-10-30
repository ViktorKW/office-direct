import "./style.scss";
import chair from "../../assets/chair.png";
import arrowRight from "../../assets/icons/arrow-right.svg";
import BasketItem from "../basketItem";
import BasketTotal from "../basketTotal";
import BasketFormGroup from "../basketFormGroup";
import clip from "../../assets/icons/clip.svg";
import cart from "../../assets/icons/submitCart.svg";
const itemsArray = [
  {
    img: chair,
    header: "Armchair Samurai KL-1.04",
    desc: "Characteristics, color, mechanism, etc: 266-460",
    initPrice: 27000,
    currentPrice: 23000,
    quantity: 1,
  },
  {
    img: chair,
    header: "Armchair Murasama KL-1.04",
    desc: "Characteristics, color, mechanism, etc: 266-460",
    initPrice: 15000,
    currentPrice: 12000,
    quantity: 4,
  },
];
const contacts = [
  {
    name: "userInput",
    placeholder: "Your name",
  },
  {
    name: "userInput",
    placeholder: "Email(optional)",
  },
  {
    name: "userInput",
    placeholder: "Phone number",
  },
];
const shipment = [
  {
    name: "radioInput",
    inputName: "delivery",
    header: "Pickup",
    sub: 'Krasnobogatyrskaya, 6 building 5 - BC "VILLA-RIVA"',
  },
  {
    name: "radioInput",
    header: "Curier delivery",
    inputName: "delivery",
    sub: "Cost — 750 grivnas, from 3 days",
  },
  {
    name: "radioInput",
    header: "Transport company",
    inputName: "delivery",
    sub: "Throughout the country, TC services are paid separately upon receipt",
  },
];
const form0 = {
  subforms: [
    {
      head: "Your contacts",
      sub: "Fill all the required fields so we could contact you for order clarification",
      array: contacts,
    },
  ],
};
const form1 = {
  subforms: [
    {
      head: "Delivery",
      array: shipment,
    },
    {
      head: "Delivery address",
      sub: "Specify only the city of delivery. We will clarify the rest of the details by phone",
      details: { head: "Download details", img: clip },
      array: [
        {
          name: "userInput",
          placeholder: "City",
        },
      ],
    },
  ],
};
const form2 = {
  subforms: [
    {
      head: "Payment",
      array: [
        {
          name: "radioInput",
          inputName: "payment",
          header: "Bank transfer for legal entities (account for payment)",
        },
        {
          name: "radioInput",
          header: "Cash payment",
          inputName: "payment",
        },
        {
          name: "radioInput",
          inputName: "payment",
          header:
            "Payment by Bank card (VISA, MasterCard, Maestro) without commission upon delivery through a payment terminal",
        },
      ],
    },
  ],
};

console.log(itemsArray.reduce((acc, { initPrice }) => acc + initPrice, 0));
const BasketPreview = () => {
  return `
    <div class="basket">
        <div class='basketRoute d-flex align-items-center'><p>Главная</p><img class='arrowRight' src=${arrowRight}><p>Cart</p></div>
        <h3>Your order</h3>
        ${itemsArray.map((e) => BasketItem(e)).join("")}
        <form>
        ${BasketTotal(
          itemsArray.reduce((acc, { initPrice }) => acc + initPrice, 0),
          itemsArray.reduce((acc, { currentPrice }) => acc + currentPrice, 0)
        )}
        ${BasketFormGroup(form0)}
        ${BasketFormGroup(form1)}
        ${BasketFormGroup(form2)}
        <div class='d-flex checkout'>
            <button class='basketCheckout' type='submit'><div class='d-flex justify-content-center'><img class='cartImg' src='${cart}'>Checkout</div></button>
            <p class='checkoutPolicy'>
            By clicking "Place order", you consent to the processing of personal data and agree to the privacy policy.
            </p>
        </div>
        </form>
    </div>
  `;
};

export default BasketPreview;
