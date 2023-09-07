import {View, Text, StyleSheet, Pressable, FlatList} from 'react-native';
import BasketDishItem from '../../components/BasketDishItem';
import restaurants from '../../../assets/data/restaurants.json'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
const restaurant = restaurants[0]

const BasketScreen = () => {
    const [quantity, setQuantity] = useState(1)
    const navigation = useNavigation();
  return (
    <View style={styles.page}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.myItems}>Your Items</Text>

            <FlatList 
                data={restaurant.dishes}
                renderItem={({item}) => <BasketDishItem basketDish={item}/>}
                />
            
            <View style={styles.separator}/>

            <Pressable onPress={() => navigation.navigate("Order")} style={styles.button}>
                <Text style={styles.ButtonText}>Create Order</Text>
            </Pressable>
        
    </View>
  );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 30,
        padding: 10,
        backgroundColor: 'white'
    },
    name: {
        fontSize: 24,
        fontWeight: "600",
        marginVertical: 10
    },
    myItems: {
        fontWeight: 'bold',
        fontSize: 19,
        marginTop: 20
    },
    separator: {
        height: 1,
        backgroundColor: "lightgrey",
        marginVertical: 10
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15
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
    },
    quantityContainer: {
        backgroundColor: '#edf0ee',
        padding: 5,
        marginRight: 5,
        borderRadius: 3
    }

})

export default BasketScreen
