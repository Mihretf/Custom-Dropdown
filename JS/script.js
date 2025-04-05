const dropdown = document.querySelector('.dropdown');
const toggle = document.getElementById('dropdownToggle');
const menu = document.getElementById('dropdownMenu');
const selectedText = document.getElementById('selectedText');
const arrow = document.getElementById('arrow');
const items = menu.querySelectorAll('li');

toggle.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});

items.forEach(item => {
  item.addEventListener('click', () => {
    selectedText.textContent = item.textContent;
    items.forEach(i => i.classList.remove('selected'));
    item.classList.add('selected');
    dropdown.classList.remove('open');
  });
});

document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});
