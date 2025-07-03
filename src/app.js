const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const servicesRoutes = require('./routes/servicesRoutes');
const promotionsRoutes = require('./routes/promotionsRoutes');
const newsRoutes = require('./routes/newsRoutes');
const projectRoutes = require('./routes/projectsRoutes');

// After importing your models and sequelize instance
const sequelize = require('./dbconfig/dbconn');
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Sync error:', err));

//swagger 
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('./utils/swagger');

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js', './src/controllers/*.js'], // Path to the API docs
};
const swaggerSpec = swaggerJsdoc(options);


app.use(cors());

//swagger docs route
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



// Middleware
app.use(express.json());

// Swagger docs route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/services', servicesRoutes);
app.use('/api/promotions', promotionsRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/projects', projectRoutes)

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to Anjotcha Digital Innovations API');
});

// Start server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});