import { createContext, useContext, useState, useEffect, ReactElement } from "react";
import { AppInterface } from "../interface/interfaces";

interface AppContextProps {
    children: ReactElement;
}

const AppContext = createContext({} as AppInterface)

export function AppContextProvider({ children }: AppContextProps) {
    // DARK MODE

    const [theme, setTheme] = useState(() => localStorage.theme === "dark");

    function handleToggleTheme() {
        setTheme(!theme);
    }

    useEffect(() => {
        const rootElement = window.document.documentElement;
        const currentTheme = theme;

        const prevTheme = currentTheme ? "light" : "dark";
        rootElement.classList.remove(prevTheme);

        const nextTheme = currentTheme ? "dark" : "light";
        rootElement.classList.add(nextTheme);

        localStorage.setItem("theme", nextTheme);
    }, [theme]);

    // MENU

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    }

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    const [menu, setMenu] = useState(false);

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setMenu(windowDimensions.width > 768 ? false : menu);
    }, [windowDimensions]);

    return (
        <AppContext.Provider
            value={{
                theme,
                handleToggleTheme,

                menu,
                setMenu
            }}>
            {children}
        </ AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);