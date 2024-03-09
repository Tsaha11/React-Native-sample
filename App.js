import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text>Hello there</Text>
      <StatusBar style="auto" />
      <Button title='Press me'/>
    </View>
    <Text>Hey from mars</Text>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#969802',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
