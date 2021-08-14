class Booklet {
  constructor(listShowContainer) {
    this.bookList = [];
    this.listShowContainer = listShowContainer;
  }

  removeBook = (index) => {
    this.bookList = this.bookList.filter((book, ind) => ind !== index);
  };

  addNewBook = (bookList) => {
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    if ((title === '') || (author === '')) {
      document.querySelector('.error').textContent = 'Please add book title and author name';
      return false;
    }
    const book = {
      title,
      author,
    };
    this.bookList.unshift(book);
    this.saveDataLocally(bookList);
    this.generateBooks();
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
    document.querySelector('.add-books').style.display = 'none';
    document.querySelector('.all-books').style.display = 'block';
    document.querySelector('.list').style.color = '#fff';
    document.querySelector('.add-new').style.color = 'rgb(49, 210, 231)';
    document.querySelector('.contact').style.color = 'rgb(49, 210, 231)';
    return false;
  };

  removeErrorMessage = () => {
    const title = document.querySelector('.title');
    const author = document.querySelector('.author');

    title.addEventListener('focus', () => {
      document.querySelector('.error').textContent = '';
    });
    author.addEventListener('focus', () => {
      document.querySelector('.error').textContent = '';
    });
    return false;
  };

  generateBooks = () => {
    const parentElement = this.listShowContainer;
    parentElement.textContent = '';

    this.bookList.forEach((bookObject, index) => {
      const div = document.createElement('div');
      div.className = 'book';

      const titleSpan = document.createElement('span');
      titleSpan.className = 'book-title';
      titleSpan.innerHTML = `"${bookObject.title}" <span class="slant">by</span> ${bookObject.author}`;
      div.appendChild(titleSpan);

      const removeButton = document.createElement('button');
      removeButton.className = 'remove-button';
      removeButton.textContent = 'Delete';
      removeButton.addEventListener('click', () => {
        this.removeBook(index);
        this.saveDataLocally(this.bookList);
        this.generateBooks();
      });

      div.appendChild(removeButton);
      parentElement.appendChild(div);

      if (index % 2 === 0) {
        div.classList.add('grey-background');
      } else {
        div.classList.add('toma');
      }
    });

    if (this.bookList.length === 0) {
      document.querySelector('.no-book').classList.remove('hide');
    } else {
      document.querySelector('.no-book').classList.add('hide');
    }
  };

  saveDataLocally = (bookList) => {
    const stringifiedBookList = JSON.stringify(bookList);
    localStorage.setItem('bookList', stringifiedBookList);
  };

  checkLocalStorage() {
    if (localStorage.getItem('bookList') !== null) {
      const localBookList = localStorage.getItem('bookList');
      const convertedBookList = JSON.parse(localBookList);
      this.bookList = convertedBookList;
      this.generateBooks();
    } else {
      this.generateBooks();
    }
  }

  addListener() {
    const addButton = document.querySelector('.add');
    addButton.addEventListener('click', () => this.addNewBook(this.bookList));
  }
}

const allBooks = new Booklet(document.querySelector('.listShow'));
if (allBooks) {
  allBooks.generateBooks();
  allBooks.checkLocalStorage();
  allBooks.addListener();
}

allBooks.removeErrorMessage();