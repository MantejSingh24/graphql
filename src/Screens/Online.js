import React, {Component} from 'react';
import {gql} from '@apollo/client';
import {ApolloProvider} from '@apollo/client';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import client1 from '../graphql/Client1';
import {SUBSCRIBE_TO_ONLINE_USERS} from '../graphql/Queries1';
import {useSubscription} from '@apollo/react-hooks';

import TodoItems from '../components/TodoItems';

const Online = () => {
  const {data, error, loading} = useSubscription(SUBSCRIBE_TO_ONLINE_USERS);
  if (loading) {
    return null;
  }
  if (error) {
    console.log(error);
    return <Text> Error </Text>;
  }
  return (
    <View style={styles.container}>
      <View>
        <Text>{' done '}</Text>
      </View>
      <FlatList
        data={data.online_users}
        renderItem={({item}) => <UserItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
const UserItem = ({item}) => (
  <View style={styles.userContainer}>
    <Text> {item.user.name} </Text>
    <View style={styles.greenDot} />
  </View>
);
const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 30,
  },
  greenDot: {
    backgroundColor: 'green',
    borderRadius: 20,
    height: 15,
    width: 15,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    paddingLeft: 5,
    paddingRight: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default Online;
