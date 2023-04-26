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
          { id: 1, title: "Пикси", price: 200 },
          { id: 2, title: "Короткое каре", price: 150 },
          { id: 3, title: "Боб", price: 200 },
          { id: 4, title: "Милитари", price: 250 },
          { id: 5, title: "Гарсон", price: 300 },
          { id: 6, title: "Каре", price: 250 },
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
          { id: 1, title: "Декоративный лак", price: 150 },
          { id: 2, title: "Европейский", price: 200 },
          { id: 3, title: "Аппаратный", price: 300 },
        ],
      },
      {
        id: 4,
        title: "Женский зал*",
        img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/114.jpg",
        optionItems: [
          { id: 1, title: "Классический", price: 150 },
          { id: 2, title: "Японский", price: 250 },
          { id: 3, title: "Spa", price: 350 },
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
        title: "Брови",
        img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/223.jpg",
        optionItems: [
          { id: 1, title: "Стрижка усов", price: 100 },
          { id: 2, title: "Стрижка усов", price: 120 },
          { id: 3, title: "Стрижка усов", price: 150 },
        ],
      },
      {
        id: 6,
        title: "Ресницы*",
        img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/232.jpg",
        optionItems: [
          { id: 1, title: "Увеличение длины", price: 313 },
          { id: 2, title: "Утолщение структуры ресниц", price: 313 },
          { id: 3, title: "Увеличение объема (густоты) ресниц", price: 313 },
          { id: 3, title: "Стойкий насыщенный цвет ресниц", price: 313 },
          { id: 3, title: "Придание ресницам изгиба", price: 313 },
          { id: 3, title: "Эффект распахнутого взгляда", price: 313 },
        ],
      },
    ],
  },
];

const serviceLists = document.querySelector(".service__lists");
const serviceListsSubmenuEl = document.querySelectorAll(".submenu");
const servicesPriceListEl = document.querySelector(".price__list");
const servicesImgEl = document.querySelector(".services-img");
const submenuListItemBtn = document.querySelectorAll(".submenu-list_item-btn");
const serviceBtn = document.querySelectorAll(".service__btn");

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
let currentItem = serviseListData[0];

function visibleSubmenu(value) {
  currentItem = serviseListData.find((e) => e.id == value);

  servicesImgEl.src = currentItem.items[0].img;

  servicesPriceListEl.innerHTML = "";

  serviceListsSubmenuEl.forEach((e) => e.classList.add("d-none"));

  serviceBtn.forEach((e) => {
    if (e.value == value) {
      e.classList.add("active__list_item-btn");
    } else {
      e.classList.remove("active__list_item-btn");
    }
  });

  submenuListItemBtn.forEach((e) => {
    if (e.value == currentItem.items[0].id) {
      e.classList.add("active--submenu-list_item-btn");
    } else {
      e.classList.remove("active--submenu-list_item-btn");
    }
  });

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

  submenuListItemBtn.forEach((e) => {
    if (e.value == id) {
      e.classList.add("active--submenu-list_item-btn");
    } else {
      e.classList.remove("active--submenu-list_item-btn");
    }
  });

  currentSubmenuItem.optionItems.map((e) =>
    servicesPriceListEl.appendChild(createServiceItem(e.id, e.title, e.price))
  );
  servicesImgEl.src = currentSubmenuItem.img;
}
