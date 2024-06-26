import { StatusBar } from "react-native";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

import ImageViewer from "../components/ImagesViewer";
import { useState } from "react";

const logo = require('../assets/images/aia_conf_app.jpg');

export default function Home({ navigation }) {
    const [inputValue, steInputValue] = useState('');

    const handlePress = () => {
        if (inputValue.trim() === '') {
            Alert.alert('Erreur', 'le champ de saisie est vide')
        } else {
            navigation.navigate('eventScreen', { input: inputValue })
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer placeHolderImageSource={logo} />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Entrez le code..."
                    value={inputValue}
                    onChangeText={steInputValue}
                />
                <Button title="Suivre" onPress={handlePress} />
            </View>
            <StatusBar style="auto" />
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    imageContainer: {
        flex: 1 / 1.5,
        paddingTop: 58,
    },
    input: {
        height: 40,
        width: 340,
        borderColor: 'gray',
        borderRadius: 10,
        color: '#444',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 0,
    },
});