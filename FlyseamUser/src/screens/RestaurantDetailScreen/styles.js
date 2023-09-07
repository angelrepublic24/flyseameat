import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    page: {
      flex: 1,
    },
    image: {
      width: '100%',
      aspectRatio: 5 / 3
    },
    iconContainer: {
      position: 'absolute',
      top: 40,
      left: 10,  
    },
    container: {
      margin: 10,
    },
    title: {
      fontSize: 30,
      fontWeight: '600',
      marginVertical: 10,
    },
    subtitle: {
      color: '#525252',
      fontSize: 15,
    },
    menuTitle: {
      marginTop: 20,
      fontSize: 18,
      letterSpacing: 0.7,
    }
  })

export default styles