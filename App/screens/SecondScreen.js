import React, {Component} from 'react';
import { Navigation } from "react-native-navigation";
import {Text,View,SafeAreaView,TouchableOpacity,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import color from '../styles/Colors';
import baseStyle from '../styles/Styles';
import strings from '../styles/Strings';
import DeviceInfo from 'react-native-device-info';
import heights from '../styles/dimen';
export default class SecondScreen extends Component{
    static options(passProps) {
        return {
          topBar: {
            title: {
              text:strings.secondScreen,
              color: color.textColor,
              fontFamily:strings.semiBoldText,
              fontSize: 16,
              animate: true, 
              alignment: 'center',
            },
            background:{
              color:color.white
            },
            drawBehind: false,
            visible: true,
            animate: true,
         
           
          }
        };
    
      }
    constructor(props){
        super(props);
        this.state={
         
            systemVer:'',
            systemName:'',
            deviceName:''
        }
        
    }
    componentDidMount(){
     
        var systemVersion = DeviceInfo.getSystemVersion();
        var systemName = DeviceInfo.getSystemName();
        DeviceInfo.getDeviceName().then(deviceName => {
            this.setState({deviceName:deviceName})
        })
        this.setState({systemName:systemName,systemVersion:systemVersion})

    }
    render(){
        return(
            <SafeAreaView style={styles.mainContainer}>
            <Text style={[baseStyle.nameText,{color:color.darkColor}]}>{`${this.props.userName}`}</Text>
            <View style={styles.viewContainer}>
              <View style={styles.subContainer}>
                  <Text>
                  <Text style={styles.headingText}>{`\u2B22 System Name  `}</Text>
                  <Text style={styles.normalText}>{`${this.state.systemName}`}</Text>
                  </Text>
                  <Text>
                  <Text style={styles.headingText}>{`\u2B22 Device Name  `}</Text>
                  <Text style={styles.normalText}>{`${this.state.deviceName}`}</Text>
                  </Text>
                  <Text>
                  <Text style={styles.headingText}>{`\u2B22 System Version  `}</Text>
                  <Text style={styles.normalText}>{`${this.state.systemVersion}`}</Text>
                  </Text>
              

              </View>
            </View>
        </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    mainContainer:{flex:1,backgroundColor:color.white},
    subContainer:{margin:16,backgroundColor:color.white,justifyContent:'center',},
    viewContainer:{alignSelf:'center',marginTop:heights.by4half},
    headingText:{fontFamily:strings.semiBoldText,fontSize:15,color:color.darkColor},
    normalText:{fontFamily:strings.mediumText,fontSize:14,color:color.textColor}
   
    })