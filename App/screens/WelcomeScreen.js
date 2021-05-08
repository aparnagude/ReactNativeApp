import React, {Component} from 'react';
import { Navigation } from "react-native-navigation";
import {Text,View,SafeAreaView,TouchableOpacity,StyleSheet,TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import strings from '../styles/Strings';
import color from '../styles/Colors';
import baseStyle from '../styles/Styles';
export default class WelcomeScreen extends Component{
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
        this.state={
            userName:''
        }
    }

gotoHome=async()=>{
   await AsyncStorage.setItem("loggedIn","1");
   await AsyncStorage.setItem("userName",this.state.userName);
     Navigation.setRoot({
        root: {
            stack: {
             children: [
             {
                component: {
                  name: 'HomeScreen',
                  id: 'HomeScreen'
                },
        
             },]
           }
        }
    });
 }
    render(){
        return(
            <SafeAreaView style={baseStyle.mainContainer}>
                 <View style={baseStyle.subContainer}>
                       <Text style={styles.welcomeText}>{strings.welcomeText}</Text>
                       <View style={styles.inputContainer}>
                         <TextInput
                            value={this.state.userName}
                            placeholder={`Name`}
                            placeholderTextColor={color.inputText}
                            onChangeText={(text)=>{this.setState({userName:text})}} 
                            style={styles.inputText}
                         />
                       </View>
                       {
                           this.state.userName===""||this.state.userName.length===0?
                            <TouchableOpacity style={[baseStyle.buttonContainer,{backgroundColor:color.hidebgColor}]}>
                                <Text style={baseStyle.buttonText}>{`${strings.continue}`}</Text>
                            </TouchableOpacity>
                          :
                            <TouchableOpacity style={baseStyle.buttonContainer} onPress={this.gotoHome}>
                                <Text style={baseStyle.buttonText}>{`${strings.continue}`}</Text>
                            </TouchableOpacity>
                       }
                      
                       
                    </View>
     
                </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
   welcomeText:{fontSize:16,fontFamily:strings.semiBoldText,color:color.textColor},
    inputText:{fontFamily:strings.mediumText,color:color.textColor,fontSize:14,padding:0,margin:0},
    inputContainer:{borderColor:color.borderColor,borderWidth:1,borderRadius:8,padding:16,backgroundColor:color.inputbg,marginVertical:10},
   
})