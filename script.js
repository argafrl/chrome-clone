var modal = document.getElementById('modalProfile');

var btn = document.getElementById('btnProfile');

btn.onclick = () => {
  modal.style.display = 'block';
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};