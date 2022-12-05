import { createContext, useEffect, useState } from 'react'
import { Theme, DarkTheme } from 'styles/theme'
import { ThemeProps } from 'styles/theme'

export const GlobalContext = createContext({} as {
    setMode: (mode: "light" | "dark") => void,
    mode: string,
    theme: ThemeProps,
    swapMode: () => void
})

export function GlobalProvider({ children }: any) {
    const [mode, setMode] = useState<"light" | "dark">("light");
    const [theme, setTheme] = useState<ThemeProps>(Theme);
    useEffect(() => {
        if (typeof window !== "undefined") {
            //@ts-ignore
            setMode(localStorage.getItem('mode') || "light")
        }
    }, [])

    useEffect(() => {
        setTheme(mode == "light" ? Theme : DarkTheme)
    }, [mode])

    const swapMode = () => {
        const newMode = mode == "light" ? "dark" : "light"
        setMode(newMode);
        // setTheme(newMode == "light" ? Theme : DarkTheme)
        localStorage.setItem('mode', newMode)
    }

    return (
        <GlobalContext.Provider value={{ mode, setMode, theme, swapMode }}>
            {children}
        </GlobalContext.Provider>
    )
}
