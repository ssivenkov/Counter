import { combineReducers, createStore, Store } from "redux";
import { setMaxValueAC, GlobalReducer } from "./GlobalReducer";

export type ActionValuesType = ReturnType<typeof setMaxValueAC>

let RootReducer = combineReducers({
  maxValue: GlobalReducer
})

export type RootStateType = ReturnType<typeof RootReducer>

export let store: Store<RootStateType, ActionValuesType> = createStore(RootReducer);