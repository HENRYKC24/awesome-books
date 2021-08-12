const listNav = document.querySelector('.list');
const addNewNav = document.querySelector('.add-new');
const contactNav = document.querySelector('.contact');

const book = document.querySelector('.all-books');
const addBooks = document.querySelector('.add-books');
const contactBox = document.querySelector('.contact-info');

const listShow1 = document.querySelector('.listShow');

listNav.addEventListener('click', () => {
  addBooks.style.display = 'none';
  contactBox.style.display = 'none';
  book.style.display = 'block';
});

addNewNav.addEventListener('click', () => {
  book.style.display = 'none';
  contactBox.style.display = 'none';
  addBooks.style.display = 'flex';
});

contactNav.addEventListener('click', () => {
  addBooks.style.display = 'none';
  book.style.display = 'none';
  contactBox.style.display = 'flex';
});

if (listShow1.innerHTML === '') {
  document.querySelector('.all-books').classList.add('hide');
} else {
  document.querySelector('.all-books').classList.remove('hide');
}