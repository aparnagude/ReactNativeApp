
import React,{Component} from 'react';
import { Navigation } from "react-native-navigation";
import {SafeAreaView,StyleSheet,Text,View,ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import color from './App/styles/Colors';
import strings from './App/styles/Strings';
import baseStyle from './App/styles/Styles'
export default class Splash extends Component{
  static options(passProps) {
		return {
			topBar: {
				drawBehind: true,
				visible: false,
				animate: false
			}
		};
	}

  constructor(props){
    super(props);
  }
async componentDidMount(){
  const loggedIn=await AsyncStorage.getItem('loggedIn');
  if(loggedIn==="1"){
    setTimeout(() => {
      this.openHomeScreen();
    }, 2000);
    
  }
  else{
    setTimeout(() => {
    this.openWelcomeScreen();
  }, 2000);
  }
}
openWelcomeScreen = () => {
  Navigation.setDefaultOptions({
    statusBar: {
      style: 'light'
    },
    layout: {
      orientation: ['portrait']
    },
    bottomTabs: {
       titleDisplayMode: 'alwaysShow',
       elevation: 80,
    },
    topBar: {
      
    }
    });


  Navigation.setRoot({
    root: {
     stack: {
     children: [
     {
       component: {
         name: 'WelcomeScreen',
         id: 'WelcomeScreen'
       },

     },

     ]
   }
    }
  });
  }

  openHomeScreen = () => {
    Navigation.setDefaultOptions({
      statusBar: {
        style: 'light'
      },
      layout: {
        orientation: ['portrait']
      },
      bottomTabs: {
         titleDisplayMode: 'alwaysShow',
         elevation: 80,
      },
      topBar: {
        
      }
      });
  
  
    Navigation.setRoot({
      root: {
       stack: {
       children: [
       {
         component: {
           name: 'HomeScreen',
           id: 'HomeScreen'
         },
  
       },
  
       ]
     }
      }
    });
    }

render(){
  return(
    <SafeAreaView style={baseStyle.mainContainer}>
      <View style={baseStyle.subContainer}>
      <ActivityIndicator
          animating = {true}
          color = {color.darkColor}
          size = "large"
          alignItems='center'
          style={{alignSelf:'center'}}/> 
      <Text style={styles.loadingtext}>{`${strings.loadingText}`}</Text>    
      </View>
     
    </SafeAreaView>
  )
}

}

const styles = StyleSheet.create({
 
 loadingtext:{fontSize:15,color:color.textColor,fontFamily:strings.mediumText,alignSelf:'center',marginTop:10}
});


