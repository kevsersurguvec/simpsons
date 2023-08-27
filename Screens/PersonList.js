import React,{useState, useEffect} from 'react';
import {Image, StyleSheet, View, Text,TouchableOpacity, Alert} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
export const colorBackground = '#ffffff';
export const colorText = '#000000';
export const colorHighlight = '#e5e5e5';
export const colorDanger = '#2196f3';
export const colorInfo = '#2196f3';
export const colorWarning = '#4caf50';
export const colorSuccess = '#4caf50';
export const colorDangerText = '#660000';
export const colorInfoText = '#0000cc';
export const colorWarningText = '#8e5500';
export const colorSuccessText = '#004c45';
export const backButtonWidth = 75;
export const openWidth = backButtonWidth * 2;
export const fontSize = 18;
export const padding = 18;
const PersonList = ({navigation}) => {
  
  const handleDanger = () => {
    Alert.alert(`You are not authorized to make changes`);
  };

  const handleWarning = (item) => {
    Alert.alert(`Info ${item.name}`);
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();

  const url = "https://5fc9346b2af77700165ae514.mockapi.io/simpsons"
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

console.log(data);

  return (
    <View style={styles.container}>
    {loading ? (
        <Text>Loading...</Text>
      ) : (
        data.map((item) => {
          return (
      <SwipeListView
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.rowFront}
            underlayColor={colorHighlight}
            onPress={() => navigation.navigate('Details',item)} >
              <View  style={styles.container2}>
                <Image  source= {{ uri: item.avatar }} 
                style={{ width:40, height:40, resizeMode: 'contain'}} />
      
                <View style={styles.nameStyle} >      
                  <Text  style={styles.titleStyle}>{item.name}</Text>
                </View>
              </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        renderHiddenItem={({item}) => (
          <View style={styles.rowBack}>
           
            <TouchableOpacity
              style={[styles.backLeftBtn, styles.warningBtn]}
              onPress={() => handleWarning(item)}>
              <Text style={styles.backTextWarning}>Info</Text>
            </TouchableOpacity>
         
            <TouchableOpacity
              style={[styles.backRightBtn, styles.dangerBtn]}
              onPress={() => handleDanger(item)}>
              <Text style={styles.backTextDanger}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        leftOpenValue={openWidth}
        rightOpenValue={-openWidth}
        stopLeftSwipe={openWidth}
        stopRightSwipe={-openWidth}
      />
      );
    })
  )}
</View>
);
};


const styles = StyleSheet.create({
  rowFront: {
    justifyContent: 'center',
    padding: padding,
    backgroundColor: colorBackground,
    borderBottomColor: colorHighlight,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  
  frontText: {
    color: colorText,
    fontSize: fontSize,
  },
  rowBack: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: colorBackground,
    flexDirection: 'row',
    paddingHorizontal: padding,
  },

  backTextNeutral: {
    color: colorInfoText,
    fontSize: fontSize,
  },
  backTextDanger: {
    color: colorDangerText,
    fontSize: fontSize,
  },
  backTextWarning: {
    color: colorWarningText,
    fontSize: fontSize,
  },
  backTextSuccess: {
    color: colorSuccessText,
    fontSize: fontSize,
  },
  titleStyle:{
    fontSize:18,
    color:"black",
    justifyContent:"center",
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: backButtonWidth,
  },
  infoBtn: {
    backgroundColor: colorInfo,
    right: backButtonWidth,
  },
  dangerBtn: {
    backgroundColor: colorDanger,
    right: 0,
  },
  backLeftBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: backButtonWidth,
  },
  successBtn: {
    backgroundColor: colorSuccess,
    left: backButtonWidth,
  },
  warningBtn: {
    backgroundColor: colorWarning,
    left: 0,
  },
  imageStyle: {
    width:"30%",
    alignItems:'center',
    justifyContent:'center',    
      },
  container:{
    backgroundColor:"red",
  },
  container2:{
    flexDirection:"row",
    justifyContent: 'space-evenly',
  },
  nameStyle:{
    width:"75%",
  },
});
export default PersonList;