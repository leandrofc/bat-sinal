import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import { BatLogo } from './src/components/BatLogo';
import { TextInputComponent } from './src/components/TextInputComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View>
        <BatLogo/>
      </View>
      <View>
        <BatLogo isSmall/>
      </View>
      <View>
        <TextInputComponent
          label='Name'
          value=""
          onChange={() => {}}
          placeholder='Type your name'
          isTextArea
        />
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
    padding: 24,
  },
});
