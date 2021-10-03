import React, {useEffect, useState} from 'react';
import s from './Counter.module.css';
import {CurrentValueScreen} from '../CurrentValueScreen/CurrentValueScreen';
import {SetValueButtons} from "../SetValueButtons/SetValueButtons";
import {SetValueRangeFields} from '../SetValueRangeFields/SetValueRangeFields';
import {SetValuesRangeButton} from "../SetValueRangeButton/SetValuesRangeButton";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../Redux/ReduxStore";
import { initialType, setMaxValueAC } from "../../Redux/GlobalReducer";

function Counter() {
    const dispatch = useDispatch();
    const maxValueReducerState = useSelector<RootStateType, initialType>(state => state.maxValue)

    // on first load page: check localstorage on presence of values and set
    const maxValueState = function () {
        const valueAsString = localStorage.getItem("MaxValue");
        if (valueAsString) {
            return JSON.parse(valueAsString)
        } else return maxValueReducerState.maxValue // 5
    }
    const startValueState = function () {
        const valueAsString = localStorage.getItem("StartValue");
        if (valueAsString) {
            return JSON.parse(valueAsString)
        } else return 0
    }
    useEffect(() => {
        console.log("первый рендер страницы - установка значений инпутов");
        setStartValue(startValueState())

        //setMaxValue(maxValueState())
        dispatch(setMaxValueAC(maxValueState()))
    }, [])

    // states
    const [currentValue, setCurrentValue] = useState<number | undefined>(undefined)
    /*const [maxValue, setMaxValue] = useState<number>(5)*/
    const [startValue, setStartValue] = useState<number>(0)

    let error = false;
    if (maxValueReducerState.maxValue <= startValue || startValue < 0 || maxValueReducerState.maxValue < 0) {
        error = true
    }

    // functions
    const incFunc = function () {
        if (currentValue !== undefined) {
            const newValue = currentValue + 1;
            setCurrentValue(newValue)
        }
    }
    const resetFunc = function () {
        setCurrentValue(startValue)
    }

    const setValuesLocalStorage = function () {
        localStorage.setItem("MaxValue", JSON.stringify(maxValueReducerState.maxValue))
        localStorage.setItem("StartValue", JSON.stringify(startValue))
        setCurrentValue(startValue)
    }

    const checkMaxValue = function (value: number) {
        //setMaxValue(value)
        console.log("2 - в редьюсер диспатчим экшнкриейтор(максимального значения) с тем что ввели");
        dispatch(setMaxValueAC(value))
        setCurrentValue(undefined)
    }

    const checkStartValue = function (value: number) {
        setStartValue(value)
        setCurrentValue(undefined)
    }

    return (
        <div className={s.counterContainer}>
            <div className={s.counterBody}>
                <SetValueRangeFields maxValue={maxValueReducerState.maxValue}
                                     startValue={startValue}
                                     checkMaxValue={checkMaxValue}
                                     checkStartValue={checkStartValue}
                                     maxValueInputRed={
                                         maxValueReducerState.maxValue <= startValue ||
                                         maxValueReducerState.maxValue <= 0}
                                     startValueInputRed={
                                         startValue < 0 ||
                                         maxValueReducerState.maxValue <= startValue
                                     }
                />
                <SetValuesRangeButton setValuesLocalStorage={setValuesLocalStorage}
                                      setButtonDisable={error}
                />
            </div>

            <div className={s.counterBody}>
                <CurrentValueScreen currentValue={currentValue}
                                    maxValue={maxValueReducerState.maxValue}
                                    startValue={startValue}
                />
                <SetValueButtons inc={incFunc}
                                 reset={resetFunc}
                                 incDisable={currentValue === maxValueReducerState.maxValue || currentValue === undefined}
                                 resetDisable={currentValue === startValue || currentValue === undefined}
                />
            </div>
        </div>
    );
}

export default Counter;