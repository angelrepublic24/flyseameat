import {View, Text, StyleSheet, Image, FlatList} from 'react-native';

const BasketDishItem = ({basketDish}) => {
    return (
        <View style={styles.row}>
                <View style={styles.quantityContainer}>
                    <Text>1</Text>
                </View>
                <Text style={{fontWeight: '600'}}>{basketDish.name}</Text>
                <Text style={{marginLeft: 'auto'}}>${basketDish.price}</Text>
         </View>
    )
}

const styles = StyleSheet.create({
  
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
        paddingHorizontal: 10
    },
    quantityContainer: {
        backgroundColor: '#edf0ee',
        padding: 5,
        marginRight: 5,
        borderRadius: 3
    }

})

export default BasketDishItem;