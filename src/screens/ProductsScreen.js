import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import products from '../data/products';

const ProductsScreen = () => {
    return (
        <FlatList data={products} numColumns={2} renderItem={({ item }) => (
            <View style={styles.itemContainer}>
                <Image style={styles.image} source={{ uri: item.image }} />
            </View>
        )} />
    )
}

export default ProductsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        aspectRatio: 1
    },
    itemContainer: {
        width: "50%",
        padding: 1,
    }
});




