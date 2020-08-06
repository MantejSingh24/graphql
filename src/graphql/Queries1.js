import {gql} from '@apollo/client';
const FETCH_TODOS = gql`
  query {
    todos(where: {is_public: {_eq: true}}, order_by: {created_at: desc}) {
      id
      title
      created_at
      is_completed
      is_public
      user {
        name
      }
    }
  }
`;

export default FETCH_TODOS;
