import React, {useEffect, useState} from 'react';
import s from './Counter.module.css';
import {CurrentValueScreen} from '../CurrentValueScreen/CurrentValueScreen';
import {SetValueButtons} from "../SetValueButtons/SetValueButtons";
import {SetValueRangeFields} from '../SetValueRangeFields/SetValueRangeFields';
import {SetValuesRangeButton} from "../SetValueRangeButton/SetValuesRangeButton";

function Counter() {
    const maxValueState = function () {
        const valueAsString = localStorage.getItem("MaxValue");
        if (valueAsString) {
            return JSON.parse(valueAsString)
        } else return 5
    }
    const startValueState = function () {
        const valueAsString = localStorage.getItem("StartValue");
        if (valueAsString) {
            return JSON.parse(valueAsString)
        } else return 0
    }
    useEffect(() => {
        setStartValue(startValueState())
        setMaxValue(maxValueState())
    }, [])

    const [currentValue, setCurrentValue] = useState<number | undefined>(undefined)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)

    let error = false;
    if (maxValue <= startValue || startValue < 0 || maxValue < 0) {
        error = true
    }

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
        localStorage.setItem("MaxValue", JSON.stringify(maxValue))
        localStorage.setItem("StartValue", JSON.stringify(startValue))
        setCurrentValue(startValue)
    }

    const checkMaxValue = function (value: number) {
        setMaxValue(value)
        setCurrentValue(undefined)
    }

    const checkStartValue = function (value: number) {
        setStartValue(value)
        setCurrentValue(undefined)
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