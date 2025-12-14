import { useStore } from '@/adapters/zustand/store';
import { StyleSheet, Text, View } from 'react-native';

export default function ListScreen() {

const test = useStore((state) => state.test);

  return (
    <View style={styles.container}>
      <Text> Shopping list </Text>
       <Text> Test Zustand: {test} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
