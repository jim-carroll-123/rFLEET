import { createSwaggerSpec } from 'next-swagger-doc';

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: 'src/app/api', // define api folder under app folder
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Next Swagger API Example',
        version: '1.0'
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
          }
        },
        schemas: {
          CreateUserRequest: {
            type: 'object',
            properties: {
              username: {
                type: 'string'
              },
              email: {
                type: 'string'
              },
              password: {
                type: 'string',
                minLength: 8
              },
              firstName: {
                type: 'string'
              },
              lastName: {
                type: 'string'
              },
              userType: {
                $ref: '#/components/schemas/UserType'
              }
            }
          },
          LoginRequest: {
            type: 'object',
            properties: {
              username: {
                type: 'string'
              },
              password: {
                type: 'string',
                minLength: 6
              }
            }
          },
          VerifyAccountRequest: {
            type: 'object',
            properties: {
              code: {
                type: 'string'
              },
            }
          },
          LoginResponse: {
            type: 'object',
            properties: {
              id: {
                type: 'string'
              },
              username: {
                type: 'string'
              },
              email: {
                type: 'string'
              },
              firstName: {
                type: 'string'
              },
              lastName: {
                type: 'string'
              },
              createdAt: {
                type: 'string',
                format: 'date-time'
              },
              updatedAt: {
                type: 'string',
                format: 'date-time'
              }
            }
          },
          UserType: {
            type: 'integer',
            description: 'Profile Type',
            'x-enumNames': [
              'ShippingCompanyOrEmployee',
              'TruckCompanyOwnerOperator',
              'VendorsAndServices',
              'PassengerVehicleDrivers',
              'AgentsBrokersAndFreightForwarders'
            ],
            enum: [0, 1, 2, 3, 4]
          }
        }
      },
      security: []
    }
  })
  return spec;
};