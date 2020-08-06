import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import client1 from '../graphql/Client1';
import FETCH_TODOS from '../graphql/Queries1';
import TodoItems from '../components/TodoItems';

export default class NewOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titles: [],
    };
  }

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
        console.log(response.data.todos);
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
          <FlatList
            data={this.state.titles}
            renderItem={({item}) => <TodoItems {...item} />}
            keyExtractor={(item, index) => 'key' + index}
          />
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
