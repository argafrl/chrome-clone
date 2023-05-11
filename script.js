var modalProfile = document.getElementById('modalProfile');
var btnProfile = document.getElementById('btnProfile');

let searchContainer = document.getElementById('search');
let searchList = document.getElementById('search-list');
let searchInput = document.getElementById('search-input');
let searchInputTextbox = document.getElementById('search-input-textbox');

btnProfile.onclick = () => {
  modalProfile.style.display = 'block';
};

searchInputTextbox.onclick = () => {
  searchList.style.display = 'flex';
  searchInput.style.borderRadius = '10px 10px 0 0';
};

window.onclick = (event) => {
  if (event.target == modalProfile) {
    modalProfile.style.display = 'none';
  }
};

document.addEventListener('click', function clickOutside(event) {
  if (!searchContainer.contains(event.target)) {
    searchList.style.display = 'none';
    searchInput.style.borderRadius = '50px';
  }
});
