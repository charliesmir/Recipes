import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  PanResponder,
} from "react-native";
import { RecipeBack, RecipeBackProps } from "../atoms/recipeBack";
import { RecipeCard, RecipeCardProps } from "../atoms/recipeCard";
import { useRef, useState } from "react";

export type RecipeCardOutputProps = {
  back: RecipeBackProps;
  card: RecipeCardProps;
  onDrop?: () => void;
};

const screenHeight = Dimensions.get("window").height;

export const RecipeCardOutput = ({
  back,
  card,
  onDrop,
}: RecipeCardOutputProps) => {
  const translate = useRef(new Animated.ValueXY()).current;
  const cardRef = useRef<View>(null);
  const dismissThreshold = 200; // needs to match the height of the drawer
  const [isDragging, setIsDragging] = useState(false);

  const reset = () =>
    Animated.spring(translate, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start(() => {
      setIsDragging(false);
    });

  const drop = () =>
    Animated.timing(translate, {
      toValue: { x: 0, y: screenHeight },
      duration: 220,
      useNativeDriver: false,
    }).start(() => {
      translate.setValue({ x: 0, y: 0 });
      setIsDragging(false);
      onDrop?.();
    });

  const panResponder = useRef(
    PanResponder.create({
      onPanResponderGrant: () => {
        setIsDragging(true);
      },
      onMoveShouldSetPanResponder: (_, { dy }) => Math.abs(dy) > 4,
      onPanResponderMove: Animated.event(
        [null, { dx: translate.x, dy: translate.y }],
        { useNativeDriver: false },
      ),
      onPanResponderRelease: (_, _gesture) => {
        cardRef.current?.measureInWindow((y, height) => {
          const bottomY = y + height;
          const dropLine = screenHeight - dismissThreshold;
          if (bottomY >= dropLine) drop();
          else reset();
        });
      },
      onPanResponderTerminate: reset,
    }),
  ).current;

  return (
    <View style={styles.box}>
      <View style={styles.back}>
        <RecipeBack {...back} />
      </View>
      {card.isActive === false && (
        <Animated.View
          ref={cardRef}
          style={[
            styles.card,
            {
              zIndex: isDragging ? 2 : 1,
              transform: [
                { translateX: translate.x },
                { translateY: translate.y },
              ],
            },
          ]}
          {...panResponder.panHandlers}
        >
          <RecipeCard {...card} />
        </Animated.View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 150,
  },
  back: {
    position: "relative",
    top: 0,
    left: 0,
  },
  card: {
    position: "absolute",
    zIndex: 1,
  },
});
