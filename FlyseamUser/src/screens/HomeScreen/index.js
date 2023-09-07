import { StyleSheet, FlatList, View } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json'
import RestaurantComponent from '../../components/RestaurantComponent'

const HomeScreen = () => {
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

export default HomeScreen;