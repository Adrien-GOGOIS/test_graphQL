import { createServer } from 'node:http'
import { createYoga, createPubSub } from 'graphql-yoga'
import { schema } from './schema/schema.js'

import usersDatabase from './database/users.json' assert { type: "json" };
import todosDatabase from './database/todos.json' assert { type: "json" };

const pubsub = createPubSub();

const yoga = createYoga({ schema, context: { usersDatabase, todosDatabase, pubsub } })
const server = createServer(yoga)

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})