import { createContext, ReactNode, useState } from "react";

interface data {
    children: ReactNode;
}

interface AppContextData {
    menuIsOpen: Boolean;
    toggleMenu: (e: { type: String; preventDefault: () => void }) => void;
}

export const AppContext = createContext({} as AppContextData);

export function AppProvider(props: data) {
    const [menuIsOpen, setMenuIsOpen] = useState(true);

    function toggleMenu(e: { type: String; preventDefault: () => void }) {
        var menu: HTMLElement | null = document.querySelector(
            "#header button span"
        );

        var app: HTMLElement | null = document.querySelector("#App");
        if (menu && app) {
            if (menuIsOpen) {
                setMenuIsOpen(false);
                menu.classList.remove("active");
                app.classList.add("notMenu");
            } else {
                setMenuIsOpen(true);
                menu.classList.add("active");
                app.classList.remove("notMenu");
            }
        }
    }

    return (
        <AppContext.Provider
            value={{
                toggleMenu,
                menuIsOpen,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}
