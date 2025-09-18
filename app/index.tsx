import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link href="/add">Add recipe</Link>
      <Link href={{
          pathname: '/recipe/[id]',
          params: { id: '1' },
        }}>Add recipe 1</Link>
      <Link href={{
          pathname: '/recipe/[id]',
          params: { id: '2' },
        }}>Add recipe 2</Link>
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
