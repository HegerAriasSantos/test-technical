import getParams from '../lib/getParams';
import booksController from '../controllers/book';
import { error, success } from '../lib/response';
import { con } from '../database/db';

function Router(url, method, res) {
  const { path, indexBook, indexPage, format } = getParams(url);
  console.log(getParams(url));
  const methods = {
    GET: function () {
      return new Promise((resolve, reject) => {
        switch (path) {
          case '/book':
            const result = booksController.getAll();
            return result ? resolve(result) : reject('Not Found');

          case `/book/${indexBook}/page/${indexPage}/${format}`:
            const resultPage = booksController.getPage(indexBook, indexPage, format);
            return resultPage ? resolve(resultPage) : reject('Not Found');

          case `/book/${indexBook}`:
            const resultBook = booksController.getBook(indexBook);
            return resultBook ? resolve(resultBook) : reject('Not Found');

          default:
            return reject('Not Found');
        }
      });
    },
  };

  if (method in methods) {
    const controller = methods[method];
    controller()
      .then((data) => {
        console.log('success');
        success(res, data, 200, format);
      })
      .catch((err) => {
        console.log(err);
        error(res, err, 404, format);
      });
    return;
  }
  return '404';
}

export default Router;
