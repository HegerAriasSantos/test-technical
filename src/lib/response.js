export function success(res, message, status, format) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  };

  if (format === 'html') {
    headers['Content-Type'] = 'text/html';
    res.writeHead(status, headers);
    res.write(message);
  } else if (format === 'txt') {
    headers['Content-Type'] = 'text/plain';
    res.writeHead(status, headers);
    res.write(message);
  } else {
    res.writeHead(status, headers);
    const body = { data: message };
    res.write(JSON.stringify(body));
  }

  res.end();
}

export function error(res, message, status, format) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  };

  if (format === 'html') {
    headers['Content-Type'] = 'text/html';
    res.writeHead(status, headers);
    res.write(message);
  } else if (format === 'txt') {
    headers['Content-Type'] = 'text/plain';
    res.writeHead(status, headers);
    res.write(message);
  } else {
    res.writeHead(status, headers);
    const body = { error: message };
    res.write(JSON.stringify(body));
  }

  res.end();
}
