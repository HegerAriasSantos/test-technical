import { con } from '../database/db';
function getAll() {
  return new Promise((resolve, reject) => {
    con.query('SELECT * FROM book', function (err, result) {
      if (err) reject('Error');
      resolve(result);
    });
  });
}

function getPage(bookId, pageNumber) {
  return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM page WHERE book_id = ${bookId} AND page_number = ${pageNumber}`, function (err, result) {
      if (err) reject('Error');
      console.log(result);
      resolve(result);
    });
  });
}

function getBook(bookId) {
  return new Promise((resolve, reject) => {
    con.query(`SELECT * FROM book where id = ${bookId}`, function (err, result) {
      if (err) reject('Error');
      console.log(result);
      resolve(result);
    });
  });
}

export default {
  getAll,
  getPage,
  getBook,
};
