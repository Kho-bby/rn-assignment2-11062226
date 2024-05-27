import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>My name is <Text style={styles.boldText}>Clement</Text>.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#adff2f',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24,'
  },
  boldText:{
    fontWeight: 'bold',
  }
});
