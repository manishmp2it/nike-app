import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import cart from "../data/cart"
import CartListItem from '../components/CartListItem'
import { useSelector } from 'react-redux'
import { selectDeliveryPrice, selectSubtotal, selectTotal } from '../store/cartSlice'

const ShopingCartTotals=() =>{

  const subtotal =useSelector(selectSubtotal);

  const deliveryFee =useSelector(selectDeliveryPrice);
  const total=useSelector(selectTotal)

  return(
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subtotal} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryFee} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textbold}>Total</Text>
        <Text style={styles.textbold}>{total} US$</Text>
      </View>
    </View>
  )
}


const ShopingCart = () => {

  const cartItems = useSelector(state=>state.cart.items)
  return (
    <View style={{ width: "100%", flex: 1 }}>
      <FlatList data={cartItems} renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShopingCartTotals}
      />
      <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </View>
  )
}

export default ShopingCart

const styles = StyleSheet.create({
  totalsContainer: {
    padding:20,
    paddingTop:10,
    borderColor:"gainsboro",
    borderTopWidth:1,
  },
  row:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:2
  },
  text:{
    fontSize:16,
    color:"gray"
  },
  textbold:{
    fontSize:16,
    // color:"gray",
    fontWeight:"500"
  },
  button:{
    position:'absolute',
    backgroundColor:'black',
    bottom:30,
    width:'90%',
    alignSelf:'center',
    padding:20,
    borderRadius:100,
    alignItems:'center'
},
buttonText:{
    color:'white',
    fontWeight:'500',
    fontSize:16
}
})