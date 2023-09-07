import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    restaurantContainer: {
        width: "100%",
        marginVertical: 10
      },
      image:{
        width: "100%",
        aspectRatio: 5 / 3,
        marginBottom: 5 
      },
      row:{
        flexDirection: 'row',
        alignItems: 'center',
      },
      title: {
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 5,
      },
      subtitle: {
        color: 'grey'
      },
      rating: {
        marginLeft: 'auto',
        backgroundColor: 'lightgrey',
        width: 30,
        height: 30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }
    
})

export default styles;