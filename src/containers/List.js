import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import Item from '../components/Item';
import data from '../resources/data/data';
const {height, width} = Dimensions.get('window');

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    _keyExtractor = (item, index) => index;

    render() {
        console.log(data);
        return (
            <View style={styles.container}>
                <FlatList
                    data={data.list}
                    keyExtractor={this._keyExtractor}
                    renderItem={(item) => (<Item data={item}/>)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f8',
        width: width,
    },
});
