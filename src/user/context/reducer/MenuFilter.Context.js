import { useReducer } from "react";
import { createContext } from "react";
import { MenuFilterReducer } from "./MenuFilter.Reducer";
import { MENU_ALL, MENU_DESSERT, MENU_DRINKS, MENU_MAIN_DISHES, MENU_STARTERS } from "../ActionType";



const  MenuFiltercontext = createContext();
const initState = {
    fData: 'All menu'
}

export const MenuFilterProvider = ({children}) => {
    const [state, dispatch] = useReducer(MenuFilterReducer, initState);

    const handleMenuFilter = (filterType) => {
        if(filterType === 'Main dishes') {
            dispatch(MENU_MAIN_DISHES)
        } else if(filterType === 'Drinks') {
            dispatch(MENU_DRINKS)
        } else if(filterType === 'Starters') {
            dispatch(MENU_STARTERS)
        } else if (filterType === 'Dessert') {
            dispatch(MENU_DESSERT)
        } else {
            dispatch(MENU_ALL)
        }
    }

    return (
        <MenuFiltercontext.Provider value={{...state, handleMenuFilter}}>{children}</MenuFiltercontext.Provider>
    )
}
export default MenuFiltercontext;



