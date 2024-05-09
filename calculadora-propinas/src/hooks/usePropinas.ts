import { useState } from "react";
import { menuItems } from "../data/db";

export const usePropinas = () => {
    const [data] = useState(menuItems)

    return{
        data
    }
}