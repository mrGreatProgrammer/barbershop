const serviseListData = [
  {
    id: 1,
    title: "Парикмахерские услуги",
    items: [
      {
        id: 1,
        title: "Мужской зал",
        img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/751.jpg",
        optionItems: [
          { id: 1, title: "Стрижка усов", price: 100 },
          { id: 2, title: "Бокс", price: 350 },
          { id: 3, title: "Стрижка бороды", price: 200 },
          { id: 4, title: "Полубокс", price: 400 },
          { id: 5, title: "Стрижка под насадку", price: 300 },
          { id: 6, title: "Стрижка наголо", price: 200 },
          { id: 7, title: "Школьная стрижка", price: 400 },
          { id: 8, title: "Модельная стрижка", price: 450 },
          { id: 9, title: "Дошкольная стрижка", price: 350 },
          { id: 10, title: "Модельная стрижка “Площадка”", price: 500 },
        ],
      },
      {
        id: 2,
        title: "Женский зал*",
        img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/82.jpg",
        optionItems: [
          { id: 1, title: "services-img", price: 124 },
          { id: 2, title: "services-img", price: 124 },
          { id: 3, title: "services-img", price: 124 },
          { id: 4, title: "services-img", price: 124 },
          { id: 5, title: "services-img", price: 124 },
          { id: 6, title: "services-img", price: 124 },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Ногтевой сервис*",
    items: [
      {
        id: 3,
        title: " зал",
        img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/130.jpg",
        optionItems: [
          { id: 1, title: "Стрижка усов", price: 533 },
          { id: 2, title: "Стрижка усов", price: 533 },
          { id: 3, title: "Стрижка усов", price: 533 },
        ],
      },
      {
        id: 4,
        title: "Женский зал*",
        img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/114.jpg",
        optionItems: [
          { id: 1, title: "Стрижка усов", price: 533 },
          { id: 2, title: "Стрижка усов", price: 533 },
          { id: 3, title: "Стрижка усов", price: 533 },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Брови и ресницы*",
    items: [
      {
        id: 5,
        title: "Мужской зал",
        img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/223.jpg",
        optionItems: [
          { id: 1, title: "Стрижка усов", price: 313 },
          { id: 2, title: "Стрижка усов", price: 313 },
          { id: 3, title: "Стрижка усов", price: 313 },
        ],
      },
      {
        id: 6,
        title: "Женский зал*",
        img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/232.jpg",
        optionItems: [
          { id: 1, title: "Стрижка усов", price: 313 },
          { id: 2, title: "Стрижка усов", price: 313 },
          { id: 3, title: "Стрижка усов", price: 313 },
        ],
      },
    ],
  },
];

const serviceLists = document.querySelector(".service__lists");
const serviceListsSubmenuEl = document.querySelectorAll(".submenu");
const servicesPriceListEl = document.querySelector(".price__list");
const servicesImgEl = document.querySelector(".services-img");

function createServiceItem(id, title, price) {
  const serviceItem = document.createElement("li");

  serviceItem.className = "price__item";
  serviceItem.insertAdjacentHTML(
    "afterbegin",
    `
    <span class="price__item--name" >${title}</span>
    <span class="price__item--price" >${price} руб</span>
    `
  );

  return serviceItem;
}
let currentItem = null;

function visibleSubmenu(value) {
  currentItem = serviseListData.find((e) => e.id == value);

  servicesImgEl.src = currentItem.items[0].img;

  servicesPriceListEl.innerHTML = "";

  serviceListsSubmenuEl.forEach((e) => e.classList.add("d-none"));

  serviceListsSubmenuEl[
    serviseListData.findIndex((e) => e.id == value)
  ].classList.toggle("d-none");

  currentItem.items[0].optionItems.map((e) =>
    servicesPriceListEl.appendChild(createServiceItem(e.id, e.title, e.price))
  );
}

function visibleRightContent(id) {
  const currentSubmenuItem = currentItem.items.find((e) => e.id == id);

  servicesPriceListEl.innerHTML = "";

  currentSubmenuItem.optionItems.map((e) =>
    servicesPriceListEl.appendChild(createServiceItem(e.id, e.title, e.price))
  );
  servicesImgEl.src = currentSubmenuItem.img;
}
