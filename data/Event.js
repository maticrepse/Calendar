import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLID
} from 'graphql';

import database from './database/database';

// Tip HealthWorker
const Event = new GraphQLObjectType({
  name: 'Event',
  description: 'This represents an Event',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve(event) {
        return event.id;
      }
    },
    when: {
      type: GraphQLString,
      resolve(event) {
        return event.when;
      }
    },
    content: {
      type: GraphQLString,
      resolve(event) {
        return event.content;
      }
    },
    colorTag: {
      type: GraphQLString,
      resolve(event) {
        return event.colorTag;
      }
    }
  })
});

export default Event;
