import { Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


const RestaurantComponent = ({restaurant}) => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate("Restaurant", {id: restaurant.id})
    };
    return (
        <Pressable onPress={onPress} style={styles.restaurantContainer}>
            <Image source={{ uri: restaurant.image}}  style={styles.image}/>
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>{restaurant.name}</Text>
                    <Text style={styles.subtitle}>
                        ${restaurant.deliveryFee} &#8226;  {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
                    </Text>
                </View>
                <View style={styles.rating}>
                    <Text>{restaurant.rating}</Text>
                </View>
            </View>
            
            

        </Pressable>
    );
  
}

export default RestaurantComponent;