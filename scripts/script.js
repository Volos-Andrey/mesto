let formElementName = document.querySelector('.profile__name');
let formElemenStatus = document.querySelector('.profile__status');
let nameInput = document.querySelector('.form__data_type_name');
let jobInput = document.querySelector('.form__data_type_status');

const popupOpenBtn = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const PopupContent = document.querySelector ('.popup__container')

function popupOpen() {
    nameInput.value = formElementName.textContent;
    jobInput.value = formElemenStatus.textContent;
    popup.classList.add('popup_active');
}

function closePopup() {  
    popup.classList.remove('popup_active');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    formElementName.textContent = nameInput.value;
    formElemenStatus.textContent = jobInput.value; 
    closePopup();
}

PopupContent.addEventListener('submit', formSubmitHandler); 

popupOpenBtn.addEventListener('click', function (event) {
    event.preventDefault();
    popupOpen();
});

popupClose.addEventListener('click', function (event) {
    closePopup();
});

popup.addEventListener('click', function(event) {
    if(event.target == event.currentTarget) {
        closePopup();
    }
});