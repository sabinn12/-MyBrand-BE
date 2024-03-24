import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import express, {Request, Response} from 'express';
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My Brand API',
      description: "Blogs API NODE/EXPRESS ANG MONGODB",
      contact: {
        name: "Irakiza Sabin",
        email: "irakizasabin12@gmail.com",
        
      },
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
          Authorization: {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT",
              value: "Bearer <JWT token here>"
          }
      }
    },
    
    servers: [
      {
        url: "http://localhost:5000/",
        description: "Server"
      },
     
    ]
  },
  
  
  

  apis: ['./src/**/*.ts'],
}

const swaggerSpec = swaggerJsdoc(options);

function setupSwagger(app: express.Application) {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

}

export default setupSwagger