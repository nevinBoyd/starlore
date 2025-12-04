import { createContext, useContext } from "react";

const ThemeContext = createContext();

// Global cosmic theme
const theme = {
    colors: {
        deepSpace: "#0B0C10", // background
        solarGold: "#C9A227",
        cloudWhite: "#EDEDED",
        blueShift: "#5EC8FF",
        cyanFlash: "#AEE7FF",
    },
};

export const ThemeProvider = ({ children }) => {
    return (
        <ThemeContext.Provider value={theme}>
            <style>
                {`
          :root {
            --color-deepSpace: ${theme.colors.deepSpace};
            --color-solarGold: ${theme.colors.solarGold};
            --color-cloudWhite: ${theme.colors.cloudWhite};
            --color-blueShift: ${theme.colors.blueShift};
            --color-cyanFlash: ${theme.colors.cyanFlash};
          }
        `}
            </style>
            {children}
        </ThemeContext.Provider>
    );
};

// Optional helper if later want to use theme in JS
export const useTheme = () => useContext(ThemeContext);
