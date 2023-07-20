import * as ActionType from '../ActionType'
export const increment = () => (dispatch) => {
    dispatch({type: ActionType.COUNTER_INCREMENT});
}

export const decrement = () => (dispatch) => {
    dispatch({type: ActionType.COUNTER_DECREMENT});
} 