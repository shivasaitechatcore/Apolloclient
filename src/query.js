import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
  });
  
  
// const client = ...

client
  .query({
    query: gql`
    {
      employeeList{
        id, name,email
      }
    }
    `
  })
  .then(result => console.log(result));