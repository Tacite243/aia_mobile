import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function EventScreen({ route }) {
    const { input } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Vous avez tapé : {input}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
    },
});