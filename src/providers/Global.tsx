import { createContext, useState, useMemo } from "react";
import { Outlet } from "react-router-dom";

import { Theme } from "types";

type GlobalContextProps = {
  isDarkTheme: boolean;
  isMenuOpen: boolean;
  onThemeToggle: () => void;
  onMenuOpen: () => void;
  onMenuClose: () => void;
};

export const GlobalContext = createContext<GlobalContextProps>(undefined!);

export const GlobalProvider = ({ children = <Outlet /> }: Props) => {
  const [theme, setTheme] = useState<Theme>(Theme.Light);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDarkTheme = useMemo(() => theme === Theme.Light, [theme]);

  const onThemeToggle = () => {
    setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
  };

  const onMenuOpen = () => {
    setIsMenuOpen(true);
  };
  const onMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        isDarkTheme,
        isMenuOpen,
        onMenuOpen,
        onThemeToggle,
        onMenuClose,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

type Props = {
  children?: JSX.Element;
};
