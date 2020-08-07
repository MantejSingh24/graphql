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
export {FETCH_TODOS, REMOVE_TODO};
