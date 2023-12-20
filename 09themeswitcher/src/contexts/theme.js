import { createContext,useContext } from "react";
//create context
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},

});
//create provider to aware all components(everyone) that it exists
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme()
{
    return useContext(ThemeContext);
}