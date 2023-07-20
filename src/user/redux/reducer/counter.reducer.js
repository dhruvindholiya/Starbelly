import * as ActionType from '../ActionType'

const initState = {
    count: 1
}

export const counterReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.COUNTER_INCREMENT:
            return {
                count: state.count + 1
            }
        case ActionType.COUNTER_DECREMENT:
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}