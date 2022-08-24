import { parse } from 'url';

export default function (url) {
  const urlParts = parse(url, true);
  const path = urlParts.path;
  let indexBook = path.substring(6, path.length);
  let indexPage = '';
  let format = '';
  if (path.search('t') !== -1) {
    format = path.substring(path.lastIndexOf('/') + 1, path.length);
    indexPage = path.substring(path.indexOf('p') + 5, path.indexOf('/', path.indexOf('p') + 5));
    indexBook = path.substring(6, path.indexOf('/', 7));
    indexBook = Number(indexBook);
    indexPage = Number(indexPage);
  }
  return { path, indexBook, indexPage, format };
}
