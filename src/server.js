/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */

const Hapi = require('@hapi/hapi');
const routes = require('./routes');
 
 
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
 
  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
 
init();