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

btnProfile.onclick = () => {
  modalProfileContainer.style.display = 'block';
  modalProfile.style.display = 'block';
};

btnAdd.onclick = () => {
  modalAddContainer.style.display = 'flex';
}

searchInputTextbox.onclick = () => {
  searchList.style.display = 'block';
  searchInput.style.borderRadius = '10px 10px 0 0';
};

document.addEventListener('click', function clickOutside(event) {
  if (!searchContainer.contains(event.target)) {
    searchList.style.display = 'none';
    searchInput.style.borderRadius = '50px';
  }

  if (!modalProfile.contains(event.target) && !btnProfile.contains(event.target)) {
    modalProfileContainer.style.display = 'none';
  }

  if (!modalAdd.contains(event.target) && !btnAdd.contains(event.target)) {
    modalAddContainer.style.display = 'none';
  }
});
