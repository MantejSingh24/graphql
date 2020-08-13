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
    return <Text> Error </Text>;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data.user}
        renderItem={({item}) => console.log(item)}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 30,
  },
});
export default Online;
