import { createSchema } from "graphql-yoga";
import { loadFiles }  from '@graphql-tools/load-files';
import Query from '../resolvers/query.resolver.js';
import Todo from '../resolvers/todo.resolver.js';
import User from '../resolvers/user.resolver.js';
import Mutation from "../resolvers/mutation.resolver.js";

const typeDefs = await loadFiles('src/schema/**/*.graphql');
const resolvers = { Query, Todo, User, Mutation };

export const schema = createSchema({ 
	typeDefs, 
	resolvers
})