import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import Card from './app/components/Card';


export default function App() {
  return (
    
      // <ViewImageScreen/>
      // <WelcomeScreen/>
    <View style={{backgroundColor:'#f8f4f4',padding:20,paddingTop:100}}>

     <Card title ='Jean Jacket for Sale' subTitle="$100" image={require('./app/assets/jeanJacket.jpg')}/>

    </View>
  );
}

const styles = StyleSheet.create({
 
});
