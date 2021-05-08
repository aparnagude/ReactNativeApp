/**
 * @format
 */


import { Navigation } from "react-native-navigation";
import App from './App';
import WelcomeScreen from './App/screens/WelcomeScreen';
import HomeScreen from './App/screens/HomeScreen';
import SecondScreen from './App/screens/SecondScreen';
Navigation.registerComponent('WelcomeScreen',()=>WelcomeScreen);
Navigation.registerComponent('HomeScreen',()=>HomeScreen);
Navigation.registerComponent('SecondScreen',()=>SecondScreen);
Navigation.registerComponent('SplashScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
        children: [
           {
             component: {
               name: 'SplashScreen'
            }
           }
         ]
       }
     }
  });
});