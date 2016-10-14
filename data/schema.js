 import {
   GraphQLSchema,
   GraphQLInt,
   GraphQLObjectType,
   GraphQLString,
   GraphQLList
} from 'graphql';
import StoreType from "./StoreType.js";

const store = {};

const Schema = () => {
  const schema = new GraphQLSchema ({
    query : new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        store: {
          type: StoreType,
          resolve: () => store
        }
      })
    })
  })
  return schema;
}
export default Schema;
