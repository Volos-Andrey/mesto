const popupOpenBtn = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

popupOpenBtn.addEventListener('click', function (event) {
    event.preventDefault();
    togglePopup();
});

popupClose.addEventListener('click', function (event) {
    togglePopup();
});

popup.addEventListener('click', function(event) {
    if(event.target == event.currentTarget) {
        togglePopup();
    }
});

function togglePopup() {
   popup.classList.toggle('popup_active');
}



let saveBtn = document.querySelector('.form__button');
let formElementName = document.querySelector('.profile__name');
let formElemenSubtitle = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__status');

console.log(nameInput.textContent);
console.log(jobInput.textContent);

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    formElementName.textContent = nameInput.value;   
    formElemenSubtitle.textContent = jobInput.value;
}

popup.addEventListener('submit', formSubmitHandler); 
