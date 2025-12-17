const fontFamily = {
  accent: "Spectral_400Regular",
  main: "Roboto_400Regular",
} as const;

const colors = {
  background: "#F4F3EB",
  primary: "#D07B1A",
  primaryMedium: "#A4651D",
  primaryDark: "#694216",
  white: "#FFFFFF",
  disabled: "#DBDAD2",
  disabledDark: "#ADA9A5",
  error: "#EF6B59",
};

const fontSize = {
  heading1: 34,
  heading2: 24,
  main: 16,
};

const theme = {
  colors,
  fontSize,
  fontFamily,
};

export default theme;
