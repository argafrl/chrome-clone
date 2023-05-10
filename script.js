var modal = document.getElementById('modalProfile');

var btn = document.getElementById('btnProfile');

btn.onclick = function () {
  modal.style.display = 'block';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
