import {WebSocketLink} from 'apollo-link-ws';
import {ApolloClient, InMemoryCache} from '@apollo/client';

const link = new WebSocketLink({
  uri: `https://hasura.io/learn/graphql`,
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtaWNrZXlzYW5kaHU0QGdtYWlsLmNvbSIsIm5hbWUiOiJtaWNrZXlzYW5kaHU0IiwiaWF0IjoxNTk3NjM4NTYzLjMxMSwiaXNzIjoiaHR0cHM6Ly9oYXN1cmEuaW8vbGVhcm4vIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6Im1pY2tleXNhbmRodTRAZ21haWwuY29tIiwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciIsIngtaGFzdXJhLXJvbGUiOiJ1c2VyIn0sImV4cCI6MTU5NzcyNDk2M30.AEppSDQouKtwDUfGONbvEDW1BDc2SfyBUBOSKM9dg9g`,
      },
    },
  },
});
const client1 = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    typePolicies: {
      fields: {
        online_users: {
          merge(existing, incoming, {mergeObjects}) {
            // Correct, thanks to invoking nested merge functions.
            return mergeObjects(existing, incoming);
          },
        },
        todos: {
          merge(existing, incoming, {mergeObjects}) {
            // Correct, thanks to invoking nested merge functions.
            return mergeObjects(existing, incoming);
          },
        },
      },
    },
  }),
});

export default client1;
