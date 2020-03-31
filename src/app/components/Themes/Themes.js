import React from 'react';

// IDEA: Add color scheme.
const Themes = {
  Default: {
    className: "t--default",
    themeName: "Default",
    themeBase: "red"
  },
  "Jurassic Park": {
    className: "t--jurassic-park",
    themeName: "Jurassic Park",
    themeBase: "blue"
  },
  "Night Mode": {
    className: "t--night-mode",
    themeName: "Night Mode",
    themeBase: "green"
  },
  Operator: {
    className: "t--operator",
    themeName: "Operator",
    themeBase: "black"
  },
  Tron: {
    className: "t--tron",
    themeName: "Tron",
    themeBase: "orange"
  }
};

const ThemeContext = React.createContext(Themes);

export default ThemeContext;