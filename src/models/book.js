import db from '../database/Seeder.json';
import { con } from '../database/db';
function getAll() {
  con.query('SELECT * FROM clients', function (err, result) {
    if (err) throw err;
    console.log(result[0]);
  });
  // const data = db.books;
  // return data;
}

function getPage(bookId, pageId) {
  const data = db.books_Content[bookId].pages[pageId].content;
  return data;
}

function getBook(bookId) {
  const data = db.books_Content[bookId];
  return data;
}

export default {
  getAll,
  getPage,
  getBook,
};
