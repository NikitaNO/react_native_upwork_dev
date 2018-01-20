import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/containers/Main';

export default class App extends React.Component {
  render() {
    return (
        <Main/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
