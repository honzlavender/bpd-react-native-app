import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>an honest app for</Text>
      <Text style={styles.homeTitle}>BPD</Text>
      <Text>because life sucks sometimes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeTitle: {
    fontSize: 118,
  }
});