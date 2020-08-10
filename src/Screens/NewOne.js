import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {ApolloProvider} from '@apollo/client';

import Icon from 'react-native-vector-icons/MaterialIcons';

import client1 from '../graphql/Client1';
import {FETCH_TODOS, REMOVE_TODO} from '../graphql/Queries1';
import {Mutation} from '@apollo/client/react/components';

import TodoItems from '../components/TodoItems';

export default class NewOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titles: [],
    };
    this.requestHeadlines = this.requestHeadlines.bind(this);
  }
  deleteItemById = (id) => {
    console.log(id);

    client1
      .query({
        query: FETCH_TODOS,
      })
      .then((response) => {
        const filter = response.data.todos.filter((x) => x.id !== id);

        console.log(filter);
        this.setState({titles: filter});
      });
  };
  componentDidMount() {
    this.requestHeadlines();
  }
  requestHeadlines = () => {
    client1
      .query({
        query: FETCH_TODOS,
      })
      .then((response) => {
        this.setState({
          titles: response.data.todos,
        });
      })
      .catch((error) => {
        console.log('ERROR ==>', error);
        console.warn(error);
      });
  };
  render() {
    return (
      <View>
        <View style={styles.contentContainer}>
          <View>
            <ApolloProvider client={client1}>
              <Mutation
                mutation={REMOVE_TODO}
                refetchQueries={[{query: FETCH_TODOS}]}>
                {(deleteMutation, {data}) => (
                  <FlatList
                    data={this.state.titles}
                    keyExtractor={({...item}) => item.id.toString()}
                    renderItem={({item}) => (
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <TouchableHighlight
                          onPress={() => {
                            deleteMutation({
                              variables: {
                                id: item.id,
                              },
                            })
                              .then(
                                (res) => console.log(res),
                                this.deleteItemById(item.id),
                              )
                              .catch((err) => <Text>{err}</Text>);
                          }}>
                          <Icon name="delete" size={40} color={'#BC0000'} />
                        </TouchableHighlight>

                        <TodoItems {...item} />
                      </View>
                    )}
                  />
                )}
              </Mutation>
            </ApolloProvider>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 30,
  },
});
