import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { client } from './src/graphql/client';
export default function App() {
  return <ApolloProvider client={client}>
    <MainScreen />
  </ApolloProvider>


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
