import {View, Text, Image, FlatList} from 'react-native';
import orders from '../../../assets/data/orders.json';
import restaurants from '../../../assets/data/restaurants.json'

import styles from './styles';
import BasketDishItem from '../../components/BasketDishItem';

const order = orders[0]


const OrderDetailScreenHeader = () => {
  return (
    <View>
        <View style={styles.page}>
            <Image style={styles.image} source={{uri: order.Restaurant.image}} />
                
            <View style={styles.container}>
              <Text style={styles.title}>{order.Restaurant.name}</Text>
              <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago </Text>
              <Text style={styles.menuTitle}>Your orders</Text>
            </View>
        </View>
    </View>
  )
}

const OrderDetailScreen = () => {
    return (
        <FlatList
        ListHeaderComponent={OrderDetailScreenHeader}
            data={restaurants[0].dishes}
            renderItem={({item}) => <BasketDishItem basketDish={item}/>}
        />
    )
}
export default OrderDetailScreen;