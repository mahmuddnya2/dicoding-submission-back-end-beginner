const handler = require('./handler');

const routes = [
  {
    method: 'post',
    path: '/books',
    handler: handler.addBooks,
  },
  {
    method: 'get',
    path: '/books',
    handler: handler.getAllBooks,
  },
  {
    method: 'get',
    path: '/books/{id}',
    handler: handler.getBooksById,
  },
  {
    method: 'put',
    path: '/books/{id}',
    handler: handler.editBooks,
  },
  {
    method: 'delete',
    path: '/books/{id}',
    handler: handler.delBooks,
  },
];

module.exports = routes;
