import { ActionValuesType } from "./ReduxStore";

export type StateType = {
    maxValue: number
    startValue: number
    currentValue: number | undefined
}

const SET_MAX_VALUE_TYPE = "SET-MAX-VALUE-TYPE";
const SET_START_VALUE_TYPE = "SET-START-VALUE-TYPE";
const SET_CURRENT_VALUE_TYPE = "SET-CURRENT-VALUE-TYPE";

let initialState = {
    maxValue: 5,
    startValue: 0,
    currentValue: undefined,
}

export const GlobalReducer = (state: StateType = initialState, action: ActionValuesType): StateType => {
    switch (action.type) {
        case SET_MAX_VALUE_TYPE:
            return {...state, maxValue: action.maxValue};
        case SET_START_VALUE_TYPE:
            return {...state, startValue: action.startValue};
        case SET_CURRENT_VALUE_TYPE:
            return {...state, currentValue: action.currentValue};
        default:
            return state;
    }
}

type SetMaxValueACType = {
    type: typeof SET_MAX_VALUE_TYPE,
    maxValue: number,
}
type SetStartValueACType = {
    type: typeof SET_START_VALUE_TYPE,
    startValue: number,
}
type SetCurrentValueACType = {
    type: typeof SET_CURRENT_VALUE_TYPE,
    currentValue: number | undefined,
}

export const setMaxValueAC = (maxValue: number): SetMaxValueACType => ({
    type: SET_MAX_VALUE_TYPE,
    maxValue,
});
export const setStartValueAC = (startValue: number): SetStartValueACType => ({
    type: SET_START_VALUE_TYPE,
    startValue,
});
export const setCurrentValueAC = (currentValue: number | undefined): SetCurrentValueACType => ({
    type: SET_CURRENT_VALUE_TYPE,
    currentValue,
});