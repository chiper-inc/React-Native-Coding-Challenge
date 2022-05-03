import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator, Image } from 'react-native';

export class Loading extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.MainContainer}>
                <ActivityIndicator size="large" color="#1191BD" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    }
})