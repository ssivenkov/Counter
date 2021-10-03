export type initialType = {
  maxValue: number
  minValue: number
}

export type ActionValueType = ReturnType<typeof setMaxValueAC>

let initialState: initialType = {
  maxValue: 5,
  minValue: 0,
}

export const GlobalReducer = (state = initialState, action: ActionValueType) => {
  switch (action.type) {
    case "SET-MAX-VALUE-TYPE":
      console.log("3 - редьюсер принимает экшен и возвращает новый стейт => выполняется перерисовка");
      return {...state, maxValue: action.maxValue}
    default:
      return state;
  }
}

type setMaxValueAC = {
  type: "SET-MAX-VALUE-TYPE",
  maxValue: number,
}

export const setMaxValueAC = (maxValue: number): setMaxValueAC =>
  ({type: "SET-MAX-VALUE-TYPE", maxValue})