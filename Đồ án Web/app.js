const openModalBtn = document.querySelector(".cart-buy");
const modal = document.querySelector(".picture");
const iconCloseModal = document.querySelector(".modal__header i");
const buttonCloseModal = document.querySelector(".modal__footer button"); 

function hide() {
  modal.classList.toggle("hide"); 
}

openModalBtn.addEventListener("click", hide);






