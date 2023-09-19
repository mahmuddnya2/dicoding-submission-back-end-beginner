const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
  });

  server.route(routes);
  await server.start();
  console.log(`server telah berjalan di ${server.info.uri}`);
};
// eslint-disable-next-line semi
init()
