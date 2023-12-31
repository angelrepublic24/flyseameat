import {View, FlatList, StyleSheet} from 'react-native';
import OrderListItem from '../../components/OrderListItem';
import orders from '../../../assets/data/orders.json'

const OrderScreen = () => {
  return (
    <View style={styles.page}>
        <FlatList
            data={orders}
            renderItem={({item}) => <OrderListItem order={item} />}
        />
    </View>
  )
}

const styles= StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
        paddingTop: 10
    }
})
export default OrderScreen;