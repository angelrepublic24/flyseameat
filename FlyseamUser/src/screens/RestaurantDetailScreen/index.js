import {useState, useEffect} from "react";
import {View, FlatList, ActivityIndicator} from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import DishListItem from "../../components/DishListItem";
import RestaurantHeader from "./Header";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Restaurant } from "../../models";


const RestaurantDetailScreen = () => {
  const [restaurant, setRestaurant] = useState(null)

  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id


  useEffect(() => {
    // fetch the restaurant with the id
    DataStore.query(Restaurant, id).then(setRestaurant);
  },[])

  if(!restaurant){
    return <ActivityIndicator size={"large"} color="gray"/>
  }
  console.log(restaurant);
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