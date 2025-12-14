import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false,
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="recipe/[id]" />
      <Stack.Protected guard={__DEV__}>
        <Stack.Screen name="storybook" options={{headerShown: false}}/>
      </Stack.Protected>
    </Stack>
  );
}
