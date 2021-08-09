let bookList = [
 
];

const addNewBook = () => {
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  const book = {
    title,
    author,
  };
  bookList.push(book);
  saveDataLocally();
  generateBooks();
};

const removeBook = (index) => {
  bookList = bookList.filter((book, ind) => ind !== index);
  saveDataLocally();
  generateBooks();
};

const listShowContainer = document.querySelector('.listShow');

const generateBooks = () => {
  listShowContainer.innerHTML = '';
  bookList.forEach((bookObject, index) => {
    const div = document.createElement('div');
    div.className = 'book';

    const titleSpan = document.createElement('span');
    titleSpan.className = 'book-title';
    titleSpan.textContent = bookObject.title;
    div.appendChild(titleSpan);

    const br = document.createElement('br');
    div.appendChild(br);

    const authorSpan = document.createElement('span');
    authorSpan.className = 'book-author';
    authorSpan.textContent = bookObject.author;
    div.appendChild(authorSpan);
    const br2 = document.createElement('br');
    div.appendChild(br2);

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeBook(index);
      console.log(bookList);
    });
    div.appendChild(removeButton);

    const hr = document.createElement('hr');
    hr.className = 'rule';
    div.appendChild(hr);

    listShowContainer.appendChild(div);
  });
};

generateBooks();

if(localStorage.getItem('bookList')) {
    const localBookList = localStorage.getItem('bookList');
    const convertedBookList = JSON.parse(localBookList);
    bookList = convertedBookList;
}

const addButton = document.querySelector('.add');
addButton.addEventListener('click', addNewBook);

const saveDataLocally = () => {
    const stringifiedBookList = JSON.stringify(bookList);
    localStorage.setItem('bookList', stringifiedBookList);
}
