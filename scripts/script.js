const profileName = document.querySelector('.profile__name');
const profileSubname = document.querySelector('.profile__subname');
const profileEditButton = document.querySelector('.profile__button-edit');
const addCardButton = document.querySelector('.profile__button-add');

const popupEdit = document.querySelector('.popup_edit');
const popupEditForm = popupEdit.querySelector('[name="profileData"]');
const inputName = popupEdit.querySelector('[name="profileName"]');
const inputSubname = popupEdit.querySelector('[name="profileSubname"]');
const closePopupEditButton = popupEdit.querySelector('.popup__button-close');

const popupAdd = document.querySelector('.popup_add');
const popupAddForm = popupAdd.querySelector('[name="placeData"]');
const inputPlaceName = popupAdd.querySelector('[name="placeName"]');
const inputPlaceLink = popupAdd.querySelector('[name="placeLink"]');
const closePopuppAddButton = popupAdd.querySelector('.popup__button-close');

const cardsElement = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template').content;

const popupPhotos = document.querySelector('.popup_photos');
const closePopupPhotos = popupPhotos.querySelector('.popup__button-close');

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

function openPopupEdit() {
  inputName.value = profileName.textContent;
  inputSubname.value = profileSubname.textContent;
  openPopup(popupEdit);
}

function handleSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileSubname.textContent = inputSubname.value;
  closePopup(popupEdit);
}

function generateCard(card) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardsElementImage = cardElement.querySelector('.element__image');

  cardsElementImage.src = card.link;
  cardsElementImage.alt = card.name;
  cardElement.querySelector('.element__caption').textContent = card.name;

  cardsElementImage.addEventListener('click', openPopupPhotos);
  cardElement.querySelector('.element__button-like').addEventListener('click', handleLikeButtonClick);
  cardElement.querySelector('.element__button-trash').addEventListener('click', handleRemoveButtonClick);

  return cardElement;
}

function handleSubmitCard(evt) {
  evt.preventDefault();
  const cardElement = generateCard({
    name: inputPlaceName.value,
    link: inputPlaceLink.value
  });
  cardsElement.prepend(cardElement);
  popupAddForm.reset();
  closePopup(popupAdd);
}

function openPopupPhotos(evt) {
  const popupPhotosImage = document.querySelector('.popup__image');

  popupPhotosImage.src = evt.target.src;
  popupPhotosImage.alt = evt.target.alt;
  popupPhotos.querySelector('.popup__description').textContent = evt.target.alt;
  openPopup(popupPhotos);
}

initialCards.forEach (card => {
  cardsElement.append( generateCard(card) );
});

function handleLikeButtonClick(evt) {
  evt.target.classList.toggle('element__button-like_active');
}

function handleRemoveButtonClick(evt) {
  evt.target.closest('.element').remove();
}

profileEditButton.addEventListener('click', openPopupEdit);
closePopupEditButton.addEventListener('click', () => closePopup(popupEdit));
popupEditForm.addEventListener('submit', handleSubmitProfile);

addCardButton.addEventListener('click', () => openPopup(popupAdd));
closePopuppAddButton.addEventListener('click', () => closePopup(popupAdd));
popupAddForm.addEventListener('submit', handleSubmitCard);

closePopupPhotos.addEventListener('click', () => closePopup(popupPhotos));
