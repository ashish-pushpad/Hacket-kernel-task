import { Model } from 'objection';

class User extends Model {
  static get tableName() {
    return 'users';
  }


  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'email', 'mobile'],

      properties: {
        id: { type: 'integer' },
        name: { 
          type: 'string',
          minLength: 1,
          maxLength: 100 
        },
        email: { 
          type: 'string',
          format: 'email' 
        },
        mobile: { 
          type: 'string', 
          minLength: 10,
          maxLength: 10 
        },
      },
    };
  }
}

export default User;