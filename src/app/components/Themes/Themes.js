import React from 'react';

// TODO: Add color scheme.
const Themes = {
  Default: {
    className: "t--default",
    themeName: "Default",
    themeBase: "transparent"
  },
  // "Default+": {
  //   className: "t--default-plus",
  //   themeName: "Default+",
  //   themeBase: "transparent"
  // },
  // "Jurassic Park": {
  //   className: "t--jurassic-park",
  //   themeName: "Jurassic Park",
  //   themeBase: "black"
  // },
  // "Night Vision": {
  //   className: "t--night-vision",
  //   themeName: "Night Vision",
  //   themeBase: "black"
  // },
  '007': {
    className: "t--007",
    themeName: "007",
    themeBase: "black"
  },
  Operator: {
    className: "t--operator",
    themeName: "Operator",
    themeBase: "black"
  },
  // "Star Wars": {
  //   className: "t--star-wars",
  //   themeName: "Star Wars",
  //   themeBase: "black"
  // },
  // Tron: {
  //   className: "t--tron",
  //   themeName: "Tron",
  //   themeBase: "black"
  // }
};

const ThemeContext = React.createContext(Themes);

export default ThemeContext;