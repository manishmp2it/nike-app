import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import products from '../data/products';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { productsSlice } from '../store/productsSlice';

const ProductsScreen = ({navigation}) => {

    const products=useSelector(state=>state.products.products)

    const dispatch=useDispatch();


    return (
         <FlatList style={styles.container} data={products} numColumns={2} renderItem={({ item }) => (
            <Pressable style={styles.itemContainer} onPress={()=>{
                dispatch(productsSlice.actions.setSelectedProduct(item.id));
                navigation.navigate('Product Details')
            }}>
                <Image style={styles.image} source={{ uri: item.image }} />
            </Pressable>
        )} />
    )
}

export default ProductsScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
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




