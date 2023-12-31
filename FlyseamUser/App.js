import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import HomeTabs from './src/navigation';
import { Amplify } from 'aws-amplify';
import { withAuthenticator} from 'aws-amplify-react-native'
import config from './src/aws-exports'

Amplify.configure({
  ...config, 
  Analytics: 
  {disabled: true}
});


function App() {
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

export default withAuthenticator(App);
