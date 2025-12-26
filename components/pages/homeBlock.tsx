import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  PanResponder,
} from "react-native";
import { useRef } from "react";
import { ShoppingPage, ShoppingPageProps } from "./shoppingPage";
import { FeedPage, FeedPageProps } from "./feedPage";
import { MenuPage, MenuPageProps } from "./menuPage";
import { Drawer } from "../atoms/drawer";

export type HomeBlockProps = {
  feed: FeedPageProps;
  shopping: ShoppingPageProps;
  menu: MenuPageProps;
};

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export const HomeBlock = ({ feed, shopping, menu }: HomeBlockProps) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const drawerY = useRef(new Animated.Value(0)).current;
  const menuY = useRef(new Animated.Value(screenHeight - 260)).current;

  const indexRef = useRef(0);
  const isMenuOpenRef = useRef(false);

  const openMenu = () => {
    isMenuOpenRef.current = true;
    Animated.parallel([
      Animated.spring(drawerY, { toValue: 500, useNativeDriver: true }),
      Animated.spring(menuY, { toValue: -90, useNativeDriver: true }),
    ]).start();
  };

  const closeMenu = () => {
    isMenuOpenRef.current = false;
    Animated.parallel([
      Animated.spring(drawerY, { toValue: 0, useNativeDriver: true }),
      Animated.spring(menuY, {
        toValue: screenHeight - 260,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const panResponderX = useRef(
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

  const panResponderDrawer = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) =>
        Math.abs(gesture.dy) > Math.abs(gesture.dx) && Math.abs(gesture.dy) > 8,
      onPanResponderRelease: (_, gesture) => {
        const swipeUp = gesture.dy < -30;
        if (!isMenuOpenRef.current && swipeUp) openMenu();
      },
    }),
  ).current;

  return (
    <View style={styles.box}>
      <View style={styles.shoppingBox}>
        <Animated.View
          style={[styles.row, { transform: [{ translateX }] }]}
          {...panResponderX.panHandlers}
        >
          <FeedPage {...feed} />
          <ShoppingPage {...shopping} />
        </Animated.View>
      </View>
      <Animated.View
        style={[styles.drawerBox, { transform: [{ translateY: drawerY }] }]}
        {...panResponderDrawer.panHandlers}
      >
        <Drawer title="WEEK MENU" />
      </Animated.View>
      <Animated.View
        style={[styles.menuBox, { transform: [{ translateY: menuY }] }]}
      >
        <MenuPage {...menu} onCloseRequest={closeMenu} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 2,
  },
  shoppingBox: {
    flex: 1,
    width: screenWidth,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    width: screenWidth * 2,
  },
  drawerBox: {
    zIndex: 3,
  },
  menuBox: {
    width: screenWidth,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: screenHeight,
  },
});
