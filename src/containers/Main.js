import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Search from '../components/Search';
import List from './List';
const {height, width} = Dimensions.get('window');

export default class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Search/>
                <List/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        width: width,
        marginTop: 25
    },
});
