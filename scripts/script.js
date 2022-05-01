let formElementName = document.querySelector('.profile__name');
let formElemenStatus = document.querySelector('.profile__status');
let nameInput = document.querySelector('.form__data_type_name');
let jobInput = document.querySelector('.form__data_type_status');

const popupOpenBtn = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const PopupContent = document.querySelector ('.popup__container')

function togglePopup() {
   popup.classList.toggle('popup_active');
   nameInput.value = formElementName.textContent; //Я так понимаю, что при активации попапа передаются данные?
   jobInput.value = formElemenStatus.textContent; //Если не сюда, то я даже не знаю...)))
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    formElementName.textContent = nameInput.value;
    formElemenStatus.textContent = jobInput.value; 
    togglePopup();
}

PopupContent.addEventListener('submit', formSubmitHandler); 

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