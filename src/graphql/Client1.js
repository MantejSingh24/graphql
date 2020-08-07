import {HttpLink} from 'apollo-link-http';
import {ApolloClient, InMemoryCache} from '@apollo/client';
const link = new HttpLink({
  uri: `https://hasura.io/learn/graphql`,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtaWNrZXlzYW5kaHU0QGdtYWlsLmNvbSIsIm5hbWUiOiJtaWNrZXlzYW5kaHU0IiwiaWF0IjoxNTk2ODAyNjc3LjYsImlzcyI6Imh0dHBzOi8vaGFzdXJhLmlvL2xlYXJuLyIsImh0dHBzOi8vaGFzdXJhLmlvL2p3dC9jbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIl0sIngtaGFzdXJhLXVzZXItaWQiOiJtaWNrZXlzYW5kaHU0QGdtYWlsLmNvbSIsIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1yb2xlIjoidXNlciJ9LCJleHAiOjE1OTY4ODkwNzd9.YW8HxPFvveWLITR67TtFj_DbSSEddO0a5Rhy1nKK76I`,
  },
});
const client1 = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client1;
