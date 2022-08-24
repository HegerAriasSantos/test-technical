import createTemplate from '../lib/createTemplate';
import Model from '../models/book';

function getAll() {
  return new Promise((resolve, reject) => {
    Model.getAll()
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

function getPage(bookId, pageNumber, format) {
  return new Promise((resolve, reject) => {
    Model.getPage(bookId, pageNumber)
      .then((data) => resolve(createTemplate(data, format)))
      .catch((err) => reject(err));
  });
}

async function getBook(bookId) {
  return new Promise((resolve, reject) => {
    Model.getBook(bookId)
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

export default {
  getAll,
  getPage,
  getBook,
};
