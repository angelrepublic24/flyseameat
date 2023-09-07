import React from "react";
import {View, FlatList} from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import restautants from '../../../assets/data/restaurants.json'
import DishListItem from "../../components/DishListItem";
import RestaurantHeader from "./Header";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";

const restaurant = restautants[0]

const RestaurantDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();


  const id = route.params?.id

  return (
    <View style={styles.page}>
      <FlatList
      ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant}/>}
        data={restaurant.dishes} 
        renderItem={({item}) => <DishListItem dish={item}
        keyExtractor={(item) => item.name}
        />}
      />
      <View style={styles.iconContainer}>
        <Ionicons
            onPress={() => navigation.goBack()}
            name={"arrow-back-circle"}
            size={45}
            color="white"
            style={styles.imageIcon}
        />
      </View>
    </View>
  )
 
}

export default RestaurantDetailScreen