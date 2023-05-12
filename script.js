let modalProfileContainer = document.getElementById('modal-profile-container');
let modalProfile = document.getElementById('modal-profile');
let btnProfile = document.getElementById('btnProfile');

let modalAddContainer = document.getElementById('modal-add-container');
let modalAdd = document.getElementById('modal-add');
let btnAdd = document.getElementById('btn-add-shortcut');

let searchContainer = document.getElementById('search');
let searchList = document.getElementById('search-list');
let searchInput = document.getElementById('search-input');
let searchInputTextbox = document.getElementById('search-input-textbox');

let formSearch = document.querySelector('form');

formSearch.addEventListener('submit', function (event) {
  event.preventDefault();
  window.open(
    'https://www.google.com/search?q=' + searchInputTextbox.value,
    '_self'
  );
});

document.addEventListener('click', handleClickOutside);

btnProfile.onclick = () => {
  modalProfileContainer.style.display = 'block';
  modalProfile.style.display = 'block';
};

btnAdd.onclick = () => {
  modalAddContainer.style.display = 'flex';
};

searchInputTextbox.onclick = () => {
  searchList.style.display = 'block';
  searchInput.style.borderRadius = '10px 10px 0 0';
};

function handleClickOutside(event) {
  hideModalProfile(event);
  hideModalAdd(event);
  hideSearchList(event);
}

function hideModalProfile(event) {
  if (
    !modalProfile.contains(event.target) &&
    !btnProfile.contains(event.target)
  ) {
    modalProfileContainer.style.display = 'none';
  }
}

function hideModalAdd(event) {
  if (!modalAdd.contains(event.target) && !btnAdd.contains(event.target)) {
    modalAddContainer.style.display = 'none';
  }
}

function hideSearchList(event) {
  if (!searchContainer.contains(event.target)) {
    searchList.style.display = 'none';
    searchInput.style.borderRadius = '50px';
  }
}
