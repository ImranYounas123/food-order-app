import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomBtn from './src/components/CustomBtn';

export default function App() {
  return (
    <View style={styles.container}>
      <CustomBtn title="Click me" onClick={() => console.log('clicked')} btnType='#F9881F' btnStyleObj={{ paddingHorizontal: 34, backgroundColor: "#F9881F", borderRadius : 10 }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
