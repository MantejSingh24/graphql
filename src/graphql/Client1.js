import {HttpLink} from 'apollo-link-http';
import {ApolloClient, InMemoryCache} from '@apollo/client';
const link = new HttpLink({
  uri: `https://hasura.io/learn/graphql`,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtaWNrZXlzYW5kaHU0QGdtYWlsLmNvbSIsIm5hbWUiOiJtaWNrZXlzYW5kaHU0IiwiaWF0IjoxNTk3MDM5NDAzLjUxMywiaXNzIjoiaHR0cHM6Ly9oYXN1cmEuaW8vbGVhcm4vIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6Im1pY2tleXNhbmRodTRAZ21haWwuY29tIiwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciIsIngtaGFzdXJhLXJvbGUiOiJ1c2VyIn0sImV4cCI6MTU5NzEyNTgwM30.Ml02ulZHjNB2Aimkrr_3HPxiQutZURsW6GO5zVIEEF8`,
  },
});
const client1 = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client1;
