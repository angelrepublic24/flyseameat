import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DishListItem = ({dish}) => {
    const navigation = useNavigation();


  return (
    <Pressable onPress={() => navigation.navigate("Dish", {id: dish.id})} style={styles.container}>
        <View style={{flex:1}}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description} numberOfLines={2}>{dish.description}</Text>
            <Text style={styles.price}>$ {dish.price}</Text>
        </View>
        {dish.image && (
        <Image style={styles.image} source={{uri: dish.image}} />
        )}
        

    </Pressable>
  )
}


const styles = StyleSheet.create({
    container:{
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    name: {
        fontWeight: '600',
        fontSize: 17,
        letterSpacing: 0.5

    },
    description: {
        color: '#525252',
        marginVertical: 5
    },
    price: {
        fontSize: 17
    },
    image: {
        height: 75,
        aspectRatio: 1,
    }

})
export default DishListItem
