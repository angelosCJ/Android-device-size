import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useWindowDimensions } from 'react-native';

export default function App() {
  const window = useWindowDimensions();
  
  return (
    <View style={[styles.container,{height:window.height,width:window.width}]}>
      <Text>HEIGHT: {window.height}</Text>
      <Text>WIDTH: {window.width}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
