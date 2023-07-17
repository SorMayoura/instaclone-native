import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
// import { AsyncStorage } from "@react-native-async-storage/async-storage";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");

export const logUserIn = async (token) => {
    await AsyncStorage.multiSet([
        ["token", token],
        ["loggedIn", "yes"]
    ]);
    isLoggedInVar(true);
    tokenVar(token);
}

export const client = new ApolloClient({
    // uri: "http://localhost:8000/graphQL",  
    uri: "https://a7f6-59-31-230-125.ngrok-free.app/graphQL",
    cache: new InMemoryCache()
});