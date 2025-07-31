import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import { BatLogo } from './src/components/BatLogo';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View>
        <BatLogo/>
      </View>
      <Button text="ACTIVATED BAT SINAL" onPress={() => {console.log("oi")}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
});
