import ThemeProvider from "@/assets/theme/themeProvider";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Spectral_400Regular } from "@expo-google-fonts/spectral";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import { Text, View } from "react-native";
import { KeyboardProvider } from "react-native-keyboard-controller";

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Spectral_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <KeyboardProvider>
        <ThemeProvider>
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerShown: false,
            }}
          >
            <Stack.Screen name="index" />
            <Stack.Screen name="recipe/[id]/index" />
            <Stack.Screen name="recipe/[id]/edit" />
            <Stack.Protected guard={__DEV__}>
              <Stack.Screen name="storybook" options={{ headerShown: false }} />
            </Stack.Protected>
          </Stack>
        </ThemeProvider>
      </KeyboardProvider>
    );
  }
}
