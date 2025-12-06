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

        // Aries Palette
        aries: {
            sparkCore: "#8c00ff",  
            lineGlow: "#0ea5e9",   
            starGlow: "#93f1ef",   
            accent: "#00d3dd",
            symbol: "#93f1ef",
        },

        // Button Palette    
        pills: {
            base: "#FFB3FD",
            shadowBase: "#1A0033",
            abyssCore: "#100030",
        }
    }
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

            --aries-sparkCore: ${theme.colors.aries.sparkCore};
            --aries-lineGlow: ${theme.colors.aries.lineGlow};
            --aries-starGlow: ${theme.colors.aries.starGlow};
            --aries-accent: ${theme.colors.aries.accent};
            --aries-symbol: ${theme.colors.aries.symbol};
            
            --pill-base: ${theme.colors.pills.base};
            --pill-shadow-base: ${theme.colors.pills.shadowBase};
            --pill-shadow: 0 4px 8px rgba(26, 0, 51, 0.65);
            --pill-text: ${theme.colors.pills.shadowBase};
            --pill-abyss: ${theme.colors.pills.abyssCore};
          }
        `}
            </style>
            {children}
        </ThemeContext.Provider>
    );
};

// Optional helper if later want to use theme in JS
export const useTheme = () => useContext(ThemeContext);
