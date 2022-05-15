const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = [
    './src/routes/index.route.ts',
];

swaggerAutogen(outputFile, endpointsFiles);