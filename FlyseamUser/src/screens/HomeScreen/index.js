import { StyleSheet, FlatList, View } from 'react-native';
import RestaurantComponent from '../../components/RestaurantComponent'
import { useEffect, useState } from 'react';
import { Restaurant } from '../../models';
import { DataStore } from 'aws-amplify';
export default function HomeScreen(){
  const [restaurants, setRestaurants] = useState([]);

 /* const fetchRestaurant = async () => {
    long route
   const results = await DataStore.query(Restaurant);
   console.log(results)
    setRestaurants(results)
  };*/

  useEffect(()=> {
    //short route
    DataStore.query(Restaurant).then(setRestaurants);
    // fetchRestaurant();
  }, []);
  return (
    <View style={styles.page}>
       <FlatList 
        data={restaurants} 
        renderItem={({item}) => <RestaurantComponent restaurant={item}/>}
        showsHorizontalScrollIndicator={false}
        />
    </View>
     
  )
}

const styles = StyleSheet.create({
  page: {
    padding: 10
  }
});
