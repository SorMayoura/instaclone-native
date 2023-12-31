import {
  ApolloClient,
  InMemoryCache,
  makeVar,
  createHttpLink, // the server's request that can include header
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context"; // create header to be included in the request
import AsyncStorage from "@react-native-async-storage/async-storage"; // add value to the local storage for log in session etc
import { offsetLimitPagination } from "@apollo/client/utilities";

const TOKEN = "token";

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");

export const logUserIn = async (token) => {
  // await AsyncStorage.multiSet([  // to add more than 1 value/variables to local storage. ex: multiSet([["objName1":value1], ["objName2":value2]])
  await AsyncStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
  tokenVar(token);
};

export default async function logUserOut() {
  await AsyncStorage.removeItem(TOKEN);
  isLoggedInVar(false);
  tokenVar(null);
}

const httpLink = createHttpLink({
  uri: "https://0036-59-31-230-125.ngrok-free.app/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: tokenVar(),
    },
  };
});

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        seeFeed:  offsetLimitPagination(),
      },
    },
  },
});

export const client = new ApolloClient({
  // uri: "http://localhost:8000/graphQL",
  link: authLink.concat(httpLink),
  cache
});
