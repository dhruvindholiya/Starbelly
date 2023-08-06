import * as ActionType from '../ActionType'

export const MenuFilterReducer = (state, action) => {
    switch (action) {
        case ActionType.MENU_STARTERS:
            return {
                fData: 'Starters'
            }
        case ActionType.MENU_MAIN_DISHES:
            return {
                fData: 'Main dishes'
            }
        case ActionType.MENU_DRINKS:
            return {
                fData: 'Drinks'
            }
        case ActionType.MENU_DESSERT:
            return {
                fData: 'Dessert'
            }
        case ActionType.MENU_ALL:
            return {
                fData: 'All menu'
            }
        default:
            return state;
    }
}


