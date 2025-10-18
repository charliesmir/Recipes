import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  isActive?: boolean;
  onLight?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'normal';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

/** Primary UI component for user interaction */
export const SaveButton = ({
  isActive = true,
  onLight = true,
  size = 'normal',
  backgroundColor,
  label,
  style,
  onPress,
}: ButtonProps) => {
  const modeStyle = isActive
    ? onLight
      ? styles.activeOnLight
      : styles.activeOnDark
    : onLight
      ? styles.notActiveOnLight
      : styles.notActiveOnDark;

  const textModeStyle = isActive
    ? onLight
      ? styles.activeOnLightText
      : styles.activeOnDarkText
    : onLight
      ? styles.notActiveOnLightText
      : styles.notActiveOnDarkText;

  const sizeStyle = styles[size];
  const textSizeStyle = textSizeStyles[size];

  return (
    <TouchableOpacity accessibilityRole="button" activeOpacity={0.6} onPress={onPress}>
      <View
        style={[
          styles.button,
          modeStyle,
          sizeStyle,
          style,
          !!backgroundColor && { backgroundColor },
        ]}
      >
        <Text style={[textModeStyle, textSizeStyle]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  button: {
    borderWidth: 0,
    borderRadius: 20,
  },
  buttonText: {
    fontWeight: '500',
    lineHeight: 1,
  },
  activeOnLight: {
    backgroundColor: '#D07B1A',
  },
  activeOnDark: {
    backgroundColor: '#ffffff',
  },
  activeOnLightText: {
    color: 'white',
  },
  activeOnDarkText: {
    color: '#A4651D',
  },
  notActiveOnLight: {
    backgroundColor: '#ADA9A5',
  },
  notActiveOnDark: {
    backgroundColor: '#694216',
  },
  notActiveOnLightText: {
    color: 'white',
  },
  notActiveOnDarkText: {
    color: '#A4651D',
  },
  normal: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  normalText: {
    fontSize: 16,
  },
});


const textSizeStyles = {
  normal: styles.normalText,
};
