import { createSchema } from "graphql-yoga";
import { loadFiles }  from '@graphql-tools/load-files';
import Query from '../resolvers/query.resolver.js';
import Todo from '../resolvers/todo.resolver.js';

const typeDefs = await loadFiles('src/schema/**/*.graphql');
const resolvers = { Query, Todo };

export const schema = createSchema({ typeDefs, resolvers })