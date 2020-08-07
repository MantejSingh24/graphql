import {gql, ApolloProvider} from '@apollo/client';
import {Mutation} from '@apollo/client/react/components';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import client1 from '../../graphql/Client1';
import {FETCH_TODOS} from '../../graphql/Queries1';

export const INSERT_TODO = gql`
  mutation($text: String!) {
    insert_todos(objects: {title: $text}) {
      returning {
        id
        title
        is_completed
        created_at
        is_public
        user {
          name
        }
      }
    }
  }
`;

export default class TextBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <ApolloProvider client={client1}>
        <Mutation
          mutation={INSERT_TODO}
          refetchQueries={[{query: FETCH_TODOS}]}>
          {(addMutation, {data}) => (
            <View style={styles.inputContainer}>
              <View style={styles.textboxContainer}>
                <TextInput
                  style={styles.textbox}
                  editable={true}
                  onChangeText={(text) => this.setState({text: text})}
                  value={this.state.text}
                />
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    addMutation({
                      variables: {
                        text: this.state.text,
                      },
                    })
                      .then((res) => console.log(res.data))
                      .catch((err) => <Text>{err}</Text>);
                    this.setState({text: ''});
                  }}>
                  <Text style={styles.buttonText}> Add </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Mutation>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 0.1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textbox: {
    flex: 1,
    padding: 10,
  },
  textboxContainer: {
    flex: 0.8,
    borderWidth: 0.5,
    paddingRight: 10,
    borderColor: '#d6d7da',
    borderRadius: 5,
  },
  buttonContainer: {
    flex: 0.2,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#39235A',
    borderColor: '#d6d7da',
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});
