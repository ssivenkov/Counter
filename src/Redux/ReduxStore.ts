import { combineReducers, createStore, Store } from "redux";
import { setMaxValueAC, GlobalReducer, setStartValueAC, setCurrentValueAC } from "./GlobalReducer";

export type ActionValuesType = ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setCurrentValueAC>

let RootReducer = combineReducers({
    globalReducer: GlobalReducer,
})

export type RootStateType = ReturnType<typeof RootReducer>

export let store: Store<RootStateType, ActionValuesType> = createStore(RootReducer);