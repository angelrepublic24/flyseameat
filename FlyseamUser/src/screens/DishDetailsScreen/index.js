import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import restaurants from '../../../assets/data/restaurants.json'
import{AntDesign} from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
const dish = restaurants[0].dishes[0]


const DishDetailsScreen = () => {
    const [quantity, setQuantity] = useState(1)
    const navigation = useNavigation();
    const plusQuantity = () => {
        setQuantity(quantity +1)
    }
    const minusQuantity = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        };    
    }

    const getTotal = () => {
        return (dish.price * quantity).toFixed(2);
    }
    
  return (
    <View style={styles.page}>
        <Image style={styles.image} source={{uri: dish.image}} />
        <View style={styles.container}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <View style={styles.separator}/>

            <View style={styles.row}>
                <AntDesign onPress={minusQuantity} name="minuscircle" size={30} color={"black"}/>
                <Text style={styles.quantity}>{quantity}</Text>
                <AntDesign onPress={plusQuantity} name="pluscircle" size={30} color={"black"}/>
            </View>
            <Pressable onPress={()=> navigation.navigate('Basket')} style={styles.button}>
                <Text style={styles.ButtonText}>Add {quantity} items to basket &#8226; ${getTotal()}</Text>
            </Pressable>
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3
    },
    container: {
        flex: 1,
        width: "100%",
        paddingVertical: 30,
        padding: 10
    },
    name: {
        fontSize: 30,
        fontWeight: "600",
        marginVertical: 10
    },
    description: {
        color: "#c9c9c9"
    },
    separator: {
        height: 1,
        backgroundColor: "lightGray",
        marginVertical: 10
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50
    },
    quantity: {
        fontSize: 20,
        marginHorizontal: 20
    },
    button: {
        backgroundColor: 'black',
        marginTop: 'auto',
        padding: 20,
        alignItems: "center",
    },
    ButtonText: {
        color: 'white',
        fontWeight: "600",
        fontSize: 18
    }

})

export default DishDetailsScreen
