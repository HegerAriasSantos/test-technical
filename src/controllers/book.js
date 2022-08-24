import Model from '../models/book';

function getAll() {
  return new Promise((resolve, reject) => {
    const data = Model.getAll();
    if (data) return resolve(data);
    return reject('Not Found');
  });
}

function getPage(bookId, pageId, format) {
  return new Promise((resolve, reject) => {
    console.log(bookId, pageId, format);
    const data = Model.getPage(bookId, pageId);
    if (format === 'html') {
      const templateHtml = `
<!doctype html>
<html>
<head>
		<title>Response!</title>
</head>
<body>
		<p>${data}</p>
</body>
</html>`;

      if (!data) {
        return reject(`
<!doctype html>
<html>
<head>
		<title>Response!</title>
</head>
<body>
		<p> Not Found</p>
</body>
</html>`);
      }
      return resolve(templateHtml);
    }
    if (format === 'txt') {
      return resolve(data);
    }
    return reject('Not Found');
  });
}

async function getBook(bookId) {
  return new Promise((resolve, reject) => {
    const data = Model.getBook(bookId);
    if (data) return resolve(data);
    return reject('Not Found');
  });
}

export default {
  getAll,
  getPage,
  getBook,
};
