
import { View, Text,StyleSheet,StatusBar, SafeAreaView } from 'react-native';
import { Calculator } from './src/screens/Calculator';
import {styles} from './src/Theme/appTheme';

export default function App() {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
      barStyle='light-content'
      backgroundColor='black'
      />
        <Calculator/>
    </SafeAreaView>
  );
}




