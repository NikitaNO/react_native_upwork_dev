import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableHighlight } from 'react-native';


export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false
        }
    }

    onOpen() {
        this.setState({ opened: !this.state.opened })
    }

    render(){
        const { containerStyles, title, description } = this.props;
        const { opened } = this.state;
        return (
            <View style={[styles.bodyRow, containerStyles ]}>
                <Text numberOfLines={opened ? 5 : 2} ellipsizeMode='tail'>
                    <Text style={[styles.bodyRowText, styles.bodyRowTextGray]}>{title}</Text>
                    <Text style={styles.bodyRowText}>{'   ' + description}</Text>
                </Text>
                {(title.length + description.length) >= 93 && !opened ?
                    <TouchableHighlight
                        onPress={() => this.onOpen()}
                        underlayColor = "transparent"
                    >
                        <Text style={styles.bodyRowMore}>...more</Text>
                    </TouchableHighlight> : null
                }
            </View>
        )
    }

}

const styles = StyleSheet.create({
    bodyRow: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderBottomColor: "#e6e6e6",
        borderBottomWidth: 1,
    },
    bodyRowText: {
        color: '#000000',
        fontSize: 14,
        lineHeight: 22
    },
    bodyRowTextGray: {
        color: '#9297a2',
        marginRight: 20
    },
    bodyRowMore: {
        position: 'absolute',
        right: 0,
        bottom: 3,
        backgroundColor: '#fff',
        paddingLeft: 5,
        color: '#9297a2'
    }
});