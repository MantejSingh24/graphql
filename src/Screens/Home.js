import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Button,
} from 'react-native';
import client from '../graphql/Client';
import Headlines from '../graphql/Queries';
import Article from '../components/Article';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      titles: [],
    };
  }

  componentDidMount() {
    this.requestHeadlines();
  }
  requestHeadlines = () => {
    client
      .query({
        query: Headlines,
      })
      .then((response) => {
        this.setState({
          loading: response.loading,
          titles: response.data.headlines.articles,
        });
      })
      .catch((error) => {
        console.log('ERROR ==>', error);
        console.warn(error);
      });
  };
  render() {
    const {loading} = this.state;

    if (loading) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000',
          }}>
          <ActivityIndicator color="#000" size="large" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Headlines App</Text>
          <Button
            title="Go to Todos"
            onPress={() => this.props.navigation.navigate('NewOne')}
          />
          <Button
            title="Add todo"
            onPress={() => this.props.navigation.navigate('TextBox')}
          />
        </View>
        <View style={styles.contentContainer}>
          <FlatList
            data={this.state.titles}
            renderItem={({item}) => <Article {...item} />}
            keyExtractor={(item, index) => 'key' + index}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 70,
  },

  header: {
    marginTop: 50,
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  headerText: {
    marginBottom: 5,
    fontSize: 30,
    fontWeight: 'bold',
  },
  contentContainer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
