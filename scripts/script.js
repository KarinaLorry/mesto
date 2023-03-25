let popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__container')
let openPopupButton = document.querySelector('.profile__button-edit');
let closePopupButton = document.querySelector('.popup__button-close');
let profileName = document.querySelector('.profile__name');
let profileSubname = document.querySelector('.profile__subname');
let inputName = document.querySelector('[name="profileName"]');
let inputSubname = document.querySelector('[name="profileSubname"]');

function openPopup() {
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputSubname.value = profileSubname.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileSubname.textContent = inputSubname.value;
  closePopup();
}

function closePopupBackground (evt) {
  evt.stopPropagation();
}

popup.addEventListener('click', closePopup);
popupForm.addEventListener('click', closePopupBackground);
popupForm.addEventListener('submit', formSubmitHandler);
openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
