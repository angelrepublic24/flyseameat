import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailScreen from '../screens/RestaurantDetailScreen';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import BasketScreen from '../screens/BasketScreen';
import OrderScreen  from '../screens/OrderScreen';
import OrderDetailScreen  from '../screens/OrderDetailScreen';
import ProfileScreen  from '../screens/ProfileScreen';

import { Foundation, FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name="HomeTabs" 
                component={HomeTabs}
                />
        </Stack.Navigator>
    );
};

const Tab = createBottomTabNavigator();
const HomeTabs = () => {
    return (
        <Tab.Navigator barStyle={{backgroundColor: 'white'}} screenOptions={{headerShown: false}}>
            <Tab.Screen name='Home' component={HomeStackNavigator} options={{tabBarIcon: (color) => <Foundation name="home" size={24} color={color} />}}/>
            <Tab.Screen name='Orders' component={OrderStackNavigator} options ={{tabBarIcon: (color) => <MaterialIcons name="list-alt" size={24} color={color} />}}/>
            <Tab.Screen name='Profile' component={ProfileScreen} options ={{tabBarIcon: (color) => <FontAwesome5 name="user-alt" size={24} color={color} />}}/>


        </Tab.Navigator>
    )
}
const HomeStack = createNativeStackNavigator();
const HomeStackNavigator = () => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Restaurants" component={HomeScreen}  />
            <HomeStack.Screen name="Restaurant" component={RestaurantDetailScreen} options={{headerShown: false}}/>
            <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
            <HomeStack.Screen name="Basket" component={BasketScreen} />

        </HomeStack.Navigator>

    )
}

const OrderStack = createNativeStackNavigator();
const OrderStackNavigator = () => {
    return(
        <HomeStack.Navigator>
            <OrderStack.Screen name="Orders" component={OrderScreen} />
            <OrderStack.Screen name="Details" component={OrderDetailScreen} />

        </HomeStack.Navigator>

    )
}

export default RootNavigator;