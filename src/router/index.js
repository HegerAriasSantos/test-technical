import getParams from '../lib/getParams';
import Controller from '../controllers/book';
import { error, success } from '../lib/response';

function Router(url, method, res) {
  const { path, indexBook, indexPage, format } = getParams(url);
  const methods = {
    GET: function () {
      return new Promise((resolve, reject) => {
        switch (path) {
          case '/book':
            const result = Controller.getAll();
            return result ? resolve(result) : reject('Not Found');

          case `/book/${indexBook}/page/${indexPage}/${format}`:
            const resultPage = Controller.getPage(indexBook, indexPage, format);
            return resultPage ? resolve(resultPage) : reject('Not Found');

          case `/book/${indexBook}`:
            const resultBook = Controller.getBook(indexBook);
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
  return error(res, err, 404, format);
}

export default Router;
