module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'Anjotcha Digital Innovations API',
    version: '1.0.0',
    description: 'API documentation for Anjotcha Digital Innovations',
  },
  servers: [
    {
      url: 'http://localhost:7000/api',
      description: 'Local server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [{ bearerAuth: [] }],
};