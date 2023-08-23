import { createSchema } from "graphql-yoga";
import { loadFiles }  from '@graphql-tools/load-files';
import Query from '../resolvers/resolver.js';

const typeDefs = await loadFiles('src/schema/**/*.graphql');
const resolvers = {Query};

export const schema = createSchema({ typeDefs, resolvers})