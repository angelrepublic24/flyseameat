import React from "react";
import {View, Image, Text} from 'react-native';
import styles from "./styles";

const RestaurantHeader = ({restaurant}) => {
  const DEFAULT_IMAGE = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg";
    return (
        <View style={styles.page}>
            <Image style={styles.image} source={{uri: restaurant.image.startsWith("http") ? restaurant.image : DEFAULT_IMAGE}} />
                
            <View style={styles.container}>
              <Text style={styles.title}>{restaurant.name}</Text>
              <Text style={styles.subtitle}>
                ${restaurant.deliveryFee.toFixed(1)} &#8226;  {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
              </Text>
              <Text style={styles.menuTitle}>Menu</Text>
            </View>
        </View>
    )
}

export default RestaurantHeader