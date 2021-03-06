const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Personal Portfolio API',
    description: 'Personal Portfolio Project API'
  },
  host: 'ak-personal-portfolio-project.herokuapp.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);