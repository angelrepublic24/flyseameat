import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import HomeTabs from './src/navigation';


export default function App() {
  return (
    <NavigationContainer>
        <HomeTabs/>
        <StatusBar style="auto" />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  
});
