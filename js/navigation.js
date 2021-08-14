const listNav = document.querySelector('.list');
const addNewNav = document.querySelector('.add-new');
const contactNav = document.querySelector('.contact');

const listNavText = document.querySelector('.list a');
const addNewNavText = document.querySelector('.add-new a');
const contactNavText = document.querySelector('.contact a');

const book = document.querySelector('.all-books');
const addBooks = document.querySelector('.add-books');
const contactBox = document.querySelector('.contact-info');

const listShow1 = document.querySelector('.listShow');

listNav.addEventListener('click', () => {
  addBooks.style.display = 'none';
  contactBox.style.display = 'none';
  book.style.display = 'block';
  listNav.style.color = '#fff';
  addNewNav.style.color = 'rgb(49, 210, 231)';
  contactNav.style.color = 'rgb(49, 210, 231)';
});

addNewNav.addEventListener('click', () => {
  book.style.display = 'none';
  contactBox.style.display = 'none';
  addBooks.style.display = 'flex';
  listNav.style.color = 'rgb(49, 210, 231)';
  addNewNav.style.color = '#fff';
  contactNav.style.color = 'rgb(49, 210, 231)';
});

contactNav.addEventListener('click', () => {
  addBooks.style.display = 'none';
  book.style.display = 'none';
  contactBox.style.display = 'flex';
  listNav.style.color = 'rgb(49, 210, 231)';
  addNewNav.style.color = 'rgb(49, 210, 231)';
  contactNav.style.color = '#fff';
});

document.querySelector('.copyright-text').innerHTML = `&copy; ${new Date().getFullYear()} Henry-Kc, with 💖 from me`;