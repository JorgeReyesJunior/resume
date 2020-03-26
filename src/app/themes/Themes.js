import React from 'react';

const Themes = {
  Default: {
    className: "t--default",
    themeName: "Default"
  },
  "Jurrassic Park": {
    className: "t--jurassic-park",
    themeName: "Jurassic Park"
  },
  Operator: {
    className: "t--operator",
    themeName: "Operator"
  },
  Tron: {
    className: "t--tron",
    themeName: "Tron"
  }
};

const ThemeContext = React.createContext(Themes);

export default ThemeContext;