# Getting Started

This is my solution for library gbh test technical.

the endpoint is http://localhost:4300.

## Install

    npm install

## Run the app

    npm run dev

# REST API

The REST API solution app is described below.

## Get list of books

### Request

`GET /book/`

    curl -i -H 'Accept: application/json' http://localhost:4300/book

### Response

    HTTP/1.1 200 OK
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Credentials: true
    Content-Type: application/json
    Date: Wed, 24 Aug 2022 20:30:25 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    Transfer-Encoding: chunked

    {"response":[{"id":1,"title":"Obras jocosas y satíricas de El Curioso Parlante","author":"Ramón de Mesonero Romanos","pages":8},{"id":2,"title":"EL ANTIGUO MADRID","author":"Ramón de Mesonero Romanos","pages":8},{"id":3,"title":"La gran aldea","author":"Ramón de Mesonero Romanos","pages":8},{"id":4,"title":"MICROMEGAS","author":"Ramón de Mesonero Romanos","pages":8}]}

## Get a book

### Request

`GET /book/:id`

    curl -i -H 'Accept: application/json' http://localhost:4300/book/2

### Response

    HTTP/1.1 200 OK
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Credentials: true
    Content-Type: application/json
    Date: Wed, 24 Aug 2022 20:35:58 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    Transfer-Encoding: chunked

    {"response":[{"id":2,"title":"EL ANTIGUO MADRID","author":"Ramón de Mesonero Romanos","pages":8}]}

## Get a page of a book

### Request

Format available: `text`,`html` and `txt`.

`GET /book/:id/page/:page/:format`

    curl -i -H 'Accept: application/json' http://localhost:4300/book/2/page/1/text

### Response

    HTTP/1.1 200 OK
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Credentials: true
    Content-Type: text/plain
    Date: Wed, 24 Aug 2022 20:38:03 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    Transfer-Encoding: chunked

    Cuando en los primeros días de 1832 empecé a publicar en el único periódicoliterario de aquella época estos festivos bosquejos de nuestras costumbrescontemporáneas, estaba muy lejos de sospechar que llegaría un día -medio siglodespués- en que sería llamado...

## Requirements

- [Instructions in English](README_EN.md)
