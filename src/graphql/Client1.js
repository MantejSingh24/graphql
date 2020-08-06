import {HttpLink} from 'apollo-link-http';
import {ApolloClient, InMemoryCache} from '@apollo/client';
const link = new HttpLink({
  uri: `https://hasura.io/learn/graphql`,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtaWNrZXlzYW5kaHU0QGdtYWlsLmNvbSIsIm5hbWUiOiJtaWNrZXlzYW5kaHU0IiwiaWF0IjoxNTk2NzE1ODY0LjAwNiwiaXNzIjoiaHR0cHM6Ly9oYXN1cmEuaW8vbGVhcm4vIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6Im1pY2tleXNhbmRodTRAZ21haWwuY29tIiwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciIsIngtaGFzdXJhLXJvbGUiOiJ1c2VyIn0sImV4cCI6MTU5NjgwMjI2NH0.gHjZ-ASPATCNp6XVb8Y6cAlRW1Kr8-ph3NiAaf-xfXQ`,
  },
});
const client1 = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client1;
