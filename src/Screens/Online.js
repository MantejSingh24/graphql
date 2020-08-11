import React, {Component} from 'react';
import {gql} from '@apollo/client';
import {ApolloProvider} from '@apollo/client';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import client1 from '../graphql/Client1';
import {
  FETCH_TODOS,
  REMOVE_TODO,
  SUBSCRIBE_TO_ONLINE_USERS,
} from '../graphql/Queries1';
import {Mutation, Subscription} from '@apollo/client/react/components';

import TodoItems from '../components/TodoItems';

export default class Online extends Component {
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
  componentDidMount() {}
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
      <ApolloProvider client={client1}>
        <Subscription
          subscription={gql`
            ${SUBSCRIBE_TO_ONLINE_USERS}
          `}>
          <View style={styles.contentContainer}>
            <View>
              <FlatList
                data={this.state.titles}
                keyExtractor={({...item}) => item.id.toString()}
                renderItem={({item}) => (
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <TodoItems {...item} />
                  </View>
                )}
              />
            </View>
          </View>
        </Subscription>
      </ApolloProvider>
    );
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 30,
  },
});
