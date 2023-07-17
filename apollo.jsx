import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

export const client = new ApolloClient({
    // uri: "http://localhost:8000/graphQL",  
    uri: "https://a7f6-59-31-230-125.ngrok-free.app/graphQL",
    cache: new InMemoryCache()
});