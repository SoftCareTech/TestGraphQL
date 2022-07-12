import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core";


export const client = new ApolloClient({
  uri: 'http://localhost:4000',
   cache: new InMemoryCache(),
});

export const PERSONS = gql`
query PersonsForHome($types: [String!], $search: String) {
  personsForHome(types: $types, search: $search) {
    id
    name
    type
    date
  }
}

`
  /*
  client.query({
      query: gql`
        query GetLocations {
          locations {
            id
            name
            description
            photo
          }
        }
      `,
  })
  
  .then((result) => console.log(result));*/
//https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqblUzOWR0eVBaeURGbkxzWGdnTVQ1WEZvQnVKd3xBQ3Jtc0tsZHpiVFJkSEg5MGR0TUYxdGhGMHlGbmwtelJNZ1NWNGg2SHU1X3gtY0JNbU5OdkxteXVmYklXWUV1TlRvZk1NRTNpVEhlYVRiN0M1eE1Mc1J5WjBWOGMtbFltV0NHcWhzMFFUNHcyRXhpWTlIbDd3UQ&q=https%3A%2F%2Ffrozen-river-77426.herokuapp.com%2Fquery&v=qM1QIGBLGgM