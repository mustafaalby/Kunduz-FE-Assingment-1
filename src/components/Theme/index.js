const breakpoints = ["40em", "64em"];

breakpoints.sm = breakpoints[0];
breakpoints.lg = breakpoints[1];

const colors = {
  white: "#ffffff",
  black: "#000000",
  blue: "#0000ff",
  green: "#00FF00",
  red: "#FF0000",
  orange: "#FF8200",
  yellow: "#FFFF00",
  turquoise: "#00FFFF",
  primary: "#264653",
  secondary: "#2a9d8f",
  primary2: "#e9c46a",
  secondary2: "#f4a261",
  cream: "#d3dfe6",
  cream2: "#bec7cc",
  cream3: "#efefef",
  cream4: "#bdc9d0",
  cream5: "#e0e0e0",
  pickle: "#e76f51",
  pickle2: "#dc9d5d",
};

const textStyles = {
  h1: {
    fontSize: 76,
    fontWeight: 100,
  },
  h2: {
    fontSize: 39,
    fontWeight: 300,
  },
  h2v2: {
    fontSize: 52,
    fontWeight: 500,
  },
  h3: {
    fontSize: 32,
    fontWeight: 300,
  },
  p1: { fontSize: 12, fontWeight: 100 },
  p2: { fontSize: 18, fontWeight: 200 },
  p3: {
    fontSize: 24,
    fontWeight: 300,
  },
};

export default { colors, breakpoints, textStyles };
