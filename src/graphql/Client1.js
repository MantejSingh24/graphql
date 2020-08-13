import {WebSocketLink} from 'apollo-link-ws';
import {ApolloClient, InMemoryCache} from '@apollo/client';

const link = new WebSocketLink({
  uri: `https://hasura.io/learn/graphql`,
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtaWNrZXlzYW5kaHU0QGdtYWlsLmNvbSIsIm5hbWUiOiJtaWNrZXlzYW5kaHU0IiwiaWF0IjoxNTk3MzAwMTEwLjgwOSwiaXNzIjoiaHR0cHM6Ly9oYXN1cmEuaW8vbGVhcm4vIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6Im1pY2tleXNhbmRodTRAZ21haWwuY29tIiwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciIsIngtaGFzdXJhLXJvbGUiOiJ1c2VyIn0sImV4cCI6MTU5NzM4NjUxMH0.d84v9xrG3d7LcxLXc0Gc9vRQySbX1u4QOLrSW7cBtbw`,
      },
    },
  },
});
const client1 = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          viewer: {
            merge: (existing, incoming, opts) =>
              opts.mergeObjects(existing, incoming),
          },
        },
      },
    },
  }),
});

export default client1;
