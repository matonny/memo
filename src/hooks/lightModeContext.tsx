import { createContext } from "react";

export const LightModeContext = createContext<"light" | "dark">("light");
