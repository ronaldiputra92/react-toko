import { createContext, useState } from "react";

const DarkModeContext = createContext();

//penggunaan useContext
function DarkModeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const darkMode = DarkModeContext;
export default DarkModeContextProvider;
