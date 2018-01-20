import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Image } from 'react-native'
const {height, width} = Dimensions.get('window');

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    placeholderTextColor="#9297a2"
                    placeholder="&#128269; Search by name or username"
                    caretHidden={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 50,
        width: width,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        borderTopWidth: 1,
        borderTopColor: '#e6e6e6'
    },
    input: {
        flex: 1,
        height: 40,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 3
    }
});
