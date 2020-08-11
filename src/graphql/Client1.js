import {WebSocketLink} from 'apollo-link-ws';
import {ApolloClient, InMemoryCache} from '@apollo/client';

const link = new WebSocketLink({
  uri: `https://hasura.io/learn/graphql`,
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtaWNrZXlzYW5kaHU0QGdtYWlsLmNvbSIsIm5hbWUiOiJtaWNrZXlzYW5kaHU0IiwiaWF0IjoxNTk3MTQzMzM4LjU1LCJpc3MiOiJodHRwczovL2hhc3VyYS5pby9sZWFybi8iLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciJdLCJ4LWhhc3VyYS11c2VyLWlkIjoibWlja2V5c2FuZGh1NEBnbWFpbC5jb20iLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtcm9sZSI6InVzZXIifSwiZXhwIjoxNTk3MjI5NzM4fQ.eniIIYDeTGtuumkynKMqXgSkelhuNrHVuY0F3DYguIw`,
      },
    },
  },
});
const client1 = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client1;
