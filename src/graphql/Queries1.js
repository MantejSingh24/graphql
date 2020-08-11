import {gql} from '@apollo/client';
const FETCH_TODOS = gql`
  query {
    todos(where: {is_public: {_eq: false}}, order_by: {created_at: desc}) {
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
const REMOVE_TODO = gql`
  mutation($id: Int) {
    delete_todos(where: {id: {_eq: $id}}) {
      affected_rows
    }
  }
`;
const SUBSCRIBE_TO_ONLINE_USERS = gql`
  subscription {
    online_users(order_by: {user: {name: asc}}) {
      user {
        name
        id
      }
      id
    }
  }
`;
export {FETCH_TODOS, REMOVE_TODO, SUBSCRIBE_TO_ONLINE_USERS};
