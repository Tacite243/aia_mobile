import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ placeHolderImageSource }) {
    return (
        <Image source={placeHolderImageSource} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 340,
        height: 240,
        borderRadius: 18,
    }
})