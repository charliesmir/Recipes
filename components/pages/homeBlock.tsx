import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  PanResponder,
} from "react-native";
import { ShoppingPage, ShoppingPageProps } from "./shoppingPage";
import { useRef } from "react";
import { FeedPage, FeedPageProps } from "./feedPage";

export type HomeBlockProps = {
  feed: FeedPageProps;
  shopping: ShoppingPageProps;
};

const screenWidth = Dimensions.get("window").width;

export const HomeBlock = ({ feed, shopping }: HomeBlockProps) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const indexRef = useRef(0);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) =>
        Math.abs(gesture.dx) > Math.abs(gesture.dy) && Math.abs(gesture.dx) > 8,
      onPanResponderMove: (_, gesture) => {
        translateX.setValue(-indexRef.current * screenWidth + gesture.dx);
      },
      onPanResponderRelease: (_, gesture) => {
        const swipe = Math.abs(gesture.dx) > screenWidth * 0.1;
        if (swipe) {
          if (gesture.dx < 0 && indexRef.current === 0) indexRef.current = 1;
          if (gesture.dx > 0 && indexRef.current === 1) indexRef.current = 0;
        }
        Animated.spring(translateX, {
          toValue: -indexRef.current * screenWidth,
          useNativeDriver: true,
        }).start();
      },
    }),
  ).current;

  return (
    <View style={styles.box}>
      <Animated.View
        style={[styles.row, { transform: [{ translateX }] }]}
        {...panResponder.panHandlers}
      >
        <FeedPage {...feed} />
        <ShoppingPage {...shopping} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    width: screenWidth,
    height: "100%",
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    width: screenWidth * 2,
  },
});
