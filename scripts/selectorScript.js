const serviseListData = [
  {
    id: 1,
    title: "Парикмахерские услуги",
    items: [
      {
        id: 1,
        title: "Мужской зал",
        img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/751.jpg",
      },
      {
        id: 2,
        title: "Женский зал*",
        img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/82.jpg",
      },
    ],
    optionItems: [
      { id: 3, title: "" },
      { id: 4, title: "" },
      { id: 5, title: "" },
    ],
  },
  {
    id: 2,
    title: "Ногтевой сервис*",
    items: [
      {
        id: 6,
        title: "Мужской зал",
        img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/130.jpg",
      },
      {
        id: 7,
        title: "Женский зал*",
        img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/114.jpg",
      },
    ],
    optionItems: [
      { id: 1, title: "" },
      { id: 2, title: "" },
      { id: 3, title: "" },
    ],
  },
  {
    id: 3,
    title: "Брови и ресницы*",
    items: [
      {
        id: 1,
        title: "Мужской зал",
        img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/223.jpg",
      },
      {
        id: 2,
        title: "Женский зал*",
        img: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/232.jpg",
      },
    ],
    optionItems: [
      { id: 1, title: "" },
      { id: 2, title: "" },
      { id: 3, title: "" },
    ],
  },
];

const serviceLists = document.querySelector(".service__lists");

function visibleSubmenu(id) {}

function createServiceItem(id, title, subItems) {
  const serviceItem = document.createElement("li");
  const serviceItemBtn = document.createElement("button");
  serviceItemBtn.className = "service__btn";
  serviceItem.className = "service__list";
  serviceItemBtn.insertAdjacentHTML(
    "afterbegin",
    `<div>
      <div class="service__list--item">
        <p class="service__list--name">${title}</p>
        <div class="arrow-down">
          <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.3" d="M0.5 1.00098L9.5 10.001L18.5 1.00098" stroke="black"
            stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </div>`
  );

  function createSubmenuItem(subItem) {
    const submenuItemEl = document.createElement("li");
    submenuItemEl.className = "submenu__itema";

    submenuItemEl.textContent = subItem.title;

    return submenuItemEl;
  }

  const submenuListEl = document.createElement("ul");
  submenuListEl.className = "submenyu";

  subItems.map((e) => submenuListEl.appendChild(createSubmenuItem(e)));

  serviceItem.appendChild(serviceItemBtn);
  submenuListEl.className = "d-none";

  serviceItemBtn.addEventListener("click", () => {
    console.log(id);
    submenuListEl.classList.toggle("d-block");
  });

  serviceItem.appendChild(submenuListEl);
  return serviceItem;
}

serviseListData.map((e) =>
  serviceLists.appendChild(createServiceItem(e.id, e.title, e.items))
);

const servicesImg = document.getElementsByClassName("services-img");


// console.log(serviceLists);
