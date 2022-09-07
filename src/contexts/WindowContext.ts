import { createContext } from "react";

export type WindowSize = {
    width: number;
    height: number
}

export const WindowContext = createContext<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
});