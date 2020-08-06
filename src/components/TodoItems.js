import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';

const TodoItem = ({id, title, user}) => (
  <View>
    <View style={styles.content}>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.source}>{id}</Text>
    </View>
  </View>
);
const styles = StyleSheet.create({
  superContent: {
    marginLeft: 5,
    flex: 1,
    borderColor: '#3d3c41',
  },
  content: {
    marginLeft: 5,
    flex: 1,
  },
  source: {
    color: '#3d3c41',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 3,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  name: {
    color: '#3d3c41',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 3,
  },
});
export default TodoItem;
