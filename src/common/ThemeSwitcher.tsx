import React from "react";
import { BsSunFill, BsFillMoonFill } from  'react-icons/bs';
import { useThemeContext } from "../context/ThemeContext";

const ThemeSwitcher: React.FC = () => {
  const { mode, switchTheme } = useThemeContext();

  const onChange = () => {
    if (mode === 'dark') {
      switchTheme('light');
    } else {
      switchTheme('dark');
    }
  };

  return (
    <div style={{ cursor: 'pointer' }} onClick={onChange}>
      {mode === 'dark' ?
        <BsFillMoonFill size={20} color="white" />
      : <BsSunFill size={20} color="black" />}
    </div>
  )
};

export default ThemeSwitcher;
