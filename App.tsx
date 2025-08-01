import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import { BatLogo } from './src/components/BatLogo';
import { TextInputComponent } from './src/components/TextInputComponent';
import Form from './src/components/Form';
import CallBatSinal from './src/components/CallBatSinal';
import Home from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
        <Home />
        <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});
