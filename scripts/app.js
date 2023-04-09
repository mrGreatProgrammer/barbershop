const arrUp = document.querySelector('.arrow-up'),
      arrDown = document.querySelector('.arrow-down')
      subMenuEl = document.querySelector('.submenu');

arrUp.addEventListener('click', function(event) {
  let target = event.target;  
  if (target) {
    subMenuEl.style.display = 'flex';
    subMenuEl.style.flexDirection = 'column';
  }
})

// arrDown.addEventListener('click', function(event) {
//   let target = event.target;
//   if (target) {
//     subMenuEl.style.display = 'none';
//   }
// })