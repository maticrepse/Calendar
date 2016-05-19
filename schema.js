 import {
   GraphQLSchema,
   GraphQLInt,
   GraphQLObjectType,
   GraphQLString,
   GraphQLList
} from 'graphql';

// let counter = 42;

let data = [
   {counter:42},
   {counter:43},
   {counter:44}
];
let Schema = () => {

   let store = {};

   let storeType = new GraphQLObjectType({
      name: 'Store',
      fields: () => ({
         data: {
            type: new GraphQLList(counterType),
            resolve: () => data
         }
      })
   })

   let counterType = new GraphQLObjectType({
      name: 'Counter',
      fields: () => ({
         counter: {
            type: GraphQLInt
         }
      })
   })

   let schema = new GraphQLSchema({
      query : new GraphQLObjectType({
         name: 'Query',
         fields: () => ({
            store: {
               type: storeType,
               resolve: () => store
            }
         })
      })
      // mutation : new GraphQLObjectType({
      //    name: 'Mutation',
      //    fields: () => ({
      //       incrementCounter: {
      //          type: GraphQLInt,
      //          resolve: () => ++counter
      //       }
      //    })
      // })
   });
   return schema;
}
export default Schema;
