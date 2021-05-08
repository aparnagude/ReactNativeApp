import React, {Component} from 'react';
import { Navigation } from "react-native-navigation";
import {Text,View,SafeAreaView,TouchableOpacity,StyleSheet,Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import color from '../styles/Colors';
import strings from '../styles/Strings';
import baseStyle from '../styles/Styles';
import Slider from 'react-native-slide-to-unlock';
export default class HomeScreen extends Component{
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
   async componentDidMount(){
      var username=await AsyncStorage.getItem("userName");
      this.setState({userName:username});
    }
    gotoSecond=()=>{
      Navigation.push(this.props.componentId, {
         component: {
              name: "SecondScreen",
              id:"SecondScreen",
              passProps: {
               userName:this.state.userName

              }
         },
         options: {
          topBar: {
            alignment: 'center',
          }
         }
     });
            
    }
    exit=async()=>{
       await AsyncStorage.setItem('loggedIn',"0");
       await AsyncStorage.setItem('userName',"");
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
    render(){
        return(
            <SafeAreaView style={styles.mainContainer}>
                <Text style={baseStyle.nameText}>{`${this.state.userName}`}</Text>
                <Text style={[baseStyle.nameText,{marginVertical:0}]} onPress={this.exit}>{`Logout`}</Text>

               <View style={styles.viewContainer}>
                  <View style={styles.subContainer}>
                      <Text style={styles.variaText} >{`${strings.variationText}`}</Text>
                      <View style={{marginVertical:25,}}>
                         <Text style={[styles.variaText,{color:color.skyblue,marginBottom:20}]} onPress={this.gotoSecond}>{`${strings.pressme}`}</Text>
                         <TouchableOpacity style={[baseStyle.buttonContainer,{backgroundColor:color.darkColor,marginVertical:10}]} onPress={this.gotoSecond}>
                           <Text style={[baseStyle.buttonText,{color:color.skyblue}]}>{`${strings.pressme}`}</Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={[baseStyle.buttonContainer,{backgroundColor:color.skyblue,marginVertical:10}]} onPress={this.gotoSecond}>
                           <Text style={baseStyle.buttonText}>{`${strings.pressme}`}</Text>
                         </TouchableOpacity>
                         <Slider
                          onEndReached={this.gotoSecond}
                          containerStyle={styles.sliderContainer}
                          sliderElement={
                           <View style={styles.imageStyle}>
                             <Image style={{width:40,height:40,alignSelf:'center',tintColor:color.white}} source={require('./../assets/diamond.png')}/>
                           </View>
                          }>
                        <Text style={[baseStyle.buttonText,{paddingVertical:10,color:color.skyblue}]}>{`${strings.slideText}`}</Text>
                       </Slider>
                      </View>
                 </View>
               </View>
            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
mainContainer:{flex:1,backgroundColor:color.textColor},
subContainer:{margin:16,backgroundColor:color.textColor,justifyContent:'center',},
viewContainer:{position:'absolute',bottom:10,left:0,right:0},
variaText:{color:color.yellow,fontFamily:strings.mediumText,fontSize:14,alignSelf:'center'},
buttonContainer:{backgroundColor:color.skyblue,borderRadius:8,justifyContent:'center',paddingVertical:16,marginVertical:10},
imageStyle:{width: 50,borderRadius: 5,height: 50,backgroundColor:color.skyblue,overflow:'hidden',justifyContent:'center'},
sliderContainer:{backgroundColor:'transparent',marginVertical:10,borderColor:color.borderColor,borderWidth:1, overflow: 'hidden',borderRadius:8,justifyContent:'center'}

})