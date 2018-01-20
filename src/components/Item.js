import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableHighlight } from 'react-native';
import StarRating from 'react-native-star-rating';
import ItemBodyRow from './ItemBodyRow';
const {height, width} = Dimensions.get('window');

export default class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    onPress() {
        console.log('Profile button pressed');
    }

    render() {
        const {name, rating, skills, language, country, avatar } = this.props.data.item;
        //Will be {url: '...'} with real API
        const picture = avatar.length ? require('../resources/images/profile.png') : require('../resources/images/default.png');
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <View style={styles.headAvatarContainer}>
                        <Image
                            style={styles.avatarOuter}
                            source={require('../resources/images/gradient.png')}
                        />
                        <Image
                            style={styles.avatar}
                            source={picture}
                        />
                    </View>
                    <View style={styles.headTextContainer}>
                        <Text style={styles.headTextContainerUp}>{name}</Text>
                        <View style={styles.headTextContainerDownWrapper}>
                            <Text style={styles.headTextContainerDown}>
                                @mook
                            </Text>
                            {rating ?
                                <View style={styles.ratingContainer}>
                                    <StarRating
                                        disabled={true}
                                        maxStars={5}
                                        rating={rating}
                                        starColor='#3bcd5a'
                                        emptyStarColor='#c7c7cc'
                                        starSize={12}
                                    />
                                    <Text style={styles.ratingText}>{rating}</Text>
                                </View>
                                :
                                <Text style={[styles.headTextContainerDown, {fontSize: 15}]}>No rating yet</Text>
                            }
                        </View>
                    </View>
                    <TouchableHighlight
                        onPress={() => this.onPress()}
                        underlayColor = "transparent"
                    >
                        <View style={styles.headProfileContainer}>
                            <Text style={styles.headProfileText}>Profile </Text>
                            <Image
                                style={styles.headProfileImage}
                                source={require('../resources/icons/arrow.png')}
                            />
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.body}>
                    <ItemBodyRow containerStyles={{borderTopColor: "#e6e6e6", borderTopWidth: 1}}
                                 title="Professional Skills"
                                 description={skills}
                    />
                    <ItemBodyRow title="Language"
                                 description={language}
                    />
                    <ItemBodyRow containerStyles={{ borderBottomWidth: 0 }}
                                 title="Country"
                                 description={country}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: width,
        minHeight: 100,
        marginBottom: 20,
        paddingVertical: 10,
        borderBottomColor: "#e6e6e6",
        borderBottomWidth: 1,
        borderTopColor: "#e6e6e6",
        borderTopWidth: 1,
    },
    head: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    body: {
        flex: 1,
        paddingHorizontal: 15
    },
    headAvatarContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headTextContainer: {
        paddingLeft: 20,
        flex: 3,
        justifyContent: 'center',
    },
    headTextContainerUp: {
        color: '#000000',
        fontSize: 17,
        fontWeight: '500',
        lineHeight: 22
    },
    headTextContainerDown: {
        color: '#9297a2',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 22,
        marginRight: 10
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ratingText: {
        marginLeft: 5,
        color: '#3bcd5a'
    },
    headTextContainerDownWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headProfileContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 10
    },
    headProfileText: {
        color: '#9297a2',
        fontSize: 16,
        marginRight: 5
    },
    headProfileImage: {
        width: 10,
        height: 15
    },
    avatarOuter: {
        width: 54,
        height: 54,
    },
    avatar: {
        marginTop: 2,
        marginLeft: 2,
        width: 50,
        height: 50,
        borderRadius: 25,
        position: 'absolute'
    },
});
