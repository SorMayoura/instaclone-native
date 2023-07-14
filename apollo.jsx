import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

export const client = new ApolloClient({
    uri: "http://localhost:8000/graphQL",
    cache: new InMemoryCache()
});