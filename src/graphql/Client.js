import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';
import {RestLink} from 'apollo-link-rest';

const restlink = new RestLink({
  uri: 'http://newsapi.org/v2/',
  headers: {
    Authorization: '379e1c906a314eb7bd9d9316a9f6368b',
  },
});

const client = new ApolloClient({
  link: restlink,
  cache: new InMemoryCache(),
});

export default client;
