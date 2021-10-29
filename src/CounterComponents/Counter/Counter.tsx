import React, { useEffect } from "react";
import s from "./Counter.module.scss";
import { CurrentValueScreen } from "../CurrentValueScreen/CurrentValueScreen";
import { SetValueButtons } from "../SetValueButtons/SetValueButtons";
import { SetValueRangeFields } from "../SetValueRangeFields/SetValueRangeFields";
import { SetValuesRangeButton } from "../SetValueRangeButton/SetValuesRangeButton";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../Redux/ReduxStore";
import { StateType, setMaxValueAC, setStartValueAC, setCurrentValueAC } from "../../Redux/GlobalReducer";

function Counter() {
    const dispatch = useDispatch();
    const {startValue, maxValue, currentValue} = useSelector<RootStateType, StateType>(state =>
        state.globalReducer);

    // useEffect on first load page: check localstorage on presence of values and set
    const maxValueState = function () {
        const valueAsString = localStorage.getItem("MaxValue");
        if (valueAsString) {
            return JSON.parse(valueAsString)
        } else return maxValue
    }
    const startValueState = function () {
        const valueAsString = localStorage.getItem("StartValue");
        if (valueAsString) {
            return JSON.parse(valueAsString)
        } else return 0
    }
    useEffect(() => {
        dispatch(setMaxValueAC(maxValueState()))
        dispatch(setStartValueAC(startValueState()))
    }, [])

    // local error state
    let error = false;
    if (maxValue <= startValue || startValue < 0 || maxValue < 0) {
        error = true
    }

    // functions
    const incFunc = function () {
        if (currentValue !== undefined) {
            const newValue = currentValue + 1
            dispatch(setCurrentValueAC(newValue))
        }
    }

    const resetFunc = function () {
        dispatch(setCurrentValueAC(startValue))
    }

    const setValuesLocalStorage = function () {
        localStorage.setItem("MaxValue", JSON.stringify(maxValue));
        localStorage.setItem("StartValue", JSON.stringify(startValue));
        dispatch(setCurrentValueAC(startValue))
    }

    const checkMaxValue = function (value: number) {
        dispatch(setMaxValueAC(value))
        dispatch(setCurrentValueAC(undefined))
    }

    const checkStartValue = function (value: number) {
        dispatch(setStartValueAC(value))
        dispatch(setCurrentValueAC(undefined))
    }

    return (
        <div className={s.counterContainer}>
            <div className={s.counterBody}>
                <SetValueRangeFields maxValue={maxValue}
                                     startValue={startValue}
                                     checkMaxValue={checkMaxValue}
                                     checkStartValue={checkStartValue}
                                     maxValueInputRed={
                                         maxValue <= startValue ||
                                         maxValue <= 0}
                                     startValueInputRed={
                                         startValue < 0 ||
                                         maxValue <= startValue
                                     }
                />
                <SetValuesRangeButton setValuesLocalStorage={setValuesLocalStorage}
                                      setButtonDisable={error}
                />
            </div>

            <div className={s.counterBody}>
                <CurrentValueScreen currentValue={currentValue}
                                    maxValue={maxValue}
                                    startValue={startValue}
                />
                <SetValueButtons inc={incFunc}
                                 reset={resetFunc}
                                 incDisable={currentValue === maxValue || currentValue === undefined}
                                 resetDisable={currentValue === startValue || currentValue === undefined}
                />
            </div>
        </div>
    );
}

export default Counter;