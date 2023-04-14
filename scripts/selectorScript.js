const serviseListData = [
  {
    id: 1,
    title: "Парикмахерские услуги",
    items: [
      { id: 1, title: "Мужской зал" },
      { id: 2, title: "Женский зал*" },
    ],
    optionItems:  [

    ],
    img: "hhalfg"
  },
  {
    id: 2,
    title: "Ногтевой сервис*",
    items: [
      { id: 1, title: "Мужской зал" },
      { id: 2, title: "Женский зал*" },
    ],
  },
  {
    id: 3,
    title: "Брови и ресницы*",
    items: [
      { id: 1, title: "Мужской зал" },
      { id: 2, title: "Женский зал*" },
    ],
  },
];

const serviceLists = document.querySelector(".service__lists");

function createServiceItem(id, title, subItems) {
  const serviceItem = document.createElement("li");
  serviceItem.className = "service__list";
  serviceItem.insertAdjacentHTML(
    "afterbegin",
    `
              <div class="service__list--item">

                <p class="service__list--name">${title}</p>
                <div class="arrow-down">
                  <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3" d="M0.5 1.00098L9.5 10.001L18.5 1.00098" stroke="black"
                      stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <ul class="submenu">
                <li class="submenu__item item__active">Мужской зал</li>
                </ul>
                `
    // <li class="submenu__item">Женский зал*</li>
  );
  return serviceItem;
}

serviseListData.map((e) =>
  serviceLists.appendChild(createServiceItem(e.id, e.title, e.items))
);

// console.log(arr)
// serviceLists.appendChild(arr);

// const a = createServiceItem();
// serviceLists.appendChild(a);

// const arrUp = document.querySelectorAll(".arrow-up"),
//   serviceItem = document.querySelector(".service__list--item"),
//   subMenuEl = document.querySelector(".submenu");

// serviceItem.addEventListener("click", function (event) {

// });
