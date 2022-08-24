export default function (data, format) {
  let template = '';
  switch (format) {
    case 'html':
      template = `
                  <!doctype html>
                  <html>
                    <head>
                    		<title>Response!</title>
                    </head>
                    <body>
                    		<p>${data[0].text}</p>
                    </body>
                  </html>`;
      break;
    case 'txt':
      template = data[0].text;
      break;
    default:
      template = `{ "response": "${data[0].text}", 'status': 1 }`;
      break;
  }
  return template;
}
