import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLBoolean,
  GraphQLInt
} from 'graphql';
import Event from './Event.js';
import database from './database/database';

const StoreType = new GraphQLObjectType({
  name: 'Store',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve() {
        return 0;
      }
    },
    events: {
      type: new GraphQLList(Event),
      args: {
        id: {
          type: GraphQLID
        },
        when: {
          type: GraphQLString
        },
        content: {
          type: GraphQLString
        },
        colorTag: {
          type: GraphQLString
        }
      },
      resolve(root, args) {
        return database.models.event.findAll({
          where: args
        });
      }
    }
  })
});

export default StoreType;
