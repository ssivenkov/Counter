import React, {useState} from 'react';
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

    const [currentValue, setCurrentValue] = useState<number | string>(startValueState())
    const [maxValue, setMaxValue] = useState<number>(maxValueState())
    const [startValue, setStartValue] = useState<number>(startValueState())

    const incFunc = function () {
        if (Number.isInteger(currentValue)) {
            setCurrentValue(+currentValue + 1)
        } else {
            setCurrentValue(startValue + 1)
        }
    }
    const resetFunc = function () {
        setCurrentValue(startValueState())
    }

    // useStates for button disabling condition
    const [maxValueFromLocalStorage, setMaxValueFromLocalStorage] = useState<number>(maxValueState())
    const [startValueFromLocalStorage, setStartValueFromLocalStorage] = useState<number>(startValueState())

    const setValuesLocalStorage = function () {
        localStorage.setItem("MaxValue", JSON.stringify(maxValue))
        localStorage.setItem("StartValue", JSON.stringify(startValue))
        setCurrentValue(startValue)

        // for button disabling condition
        const maxValueAsString = localStorage.getItem("MaxValue")
        if (maxValueAsString) {
            setMaxValueFromLocalStorage(JSON.parse(maxValueAsString))
        }
        const startValueAsString = localStorage.getItem("StartValue")
        if (startValueAsString) {
            setStartValueFromLocalStorage(JSON.parse(startValueAsString))
        }
    }

    const okText = "Enter values and press 'set'"
    const errorText = "Incorrect value!"
    const checkMaxValue = function (value: number) {
        if (value <= startValue || startValue < 0 || value <= 0) {
            setCurrentValue(errorText)
            setMaxValue(value)
        } else {
            if (maxValueFromLocalStorage === value &&
                startValueFromLocalStorage === startValue) {
                setMaxValue(value)
                resetFunc()
            } else {
                setMaxValue(value)
                setCurrentValue(okText)
            }
        }
    }

    const checkStartValue = function (value: number) {
        if (value >= maxValue || value < 0) {
            setCurrentValue(errorText)
            setStartValue(value)
        } else {
            if (maxValueFromLocalStorage === maxValue &&
                startValueFromLocalStorage === value) {
                setStartValue(value)
                resetFunc()
            } else {
                setStartValue(value)
                setCurrentValue(okText)
            }
        }
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
                                      setButtonDisable={
                                          maxValueFromLocalStorage === maxValue &&
                                          startValueFromLocalStorage === startValue ||
                                          startValue < 0 ||
                                          maxValue <= startValue
                                      }
                />
            </div>

            <div className={s.counterBody}>
                <CurrentValueScreen currentValue={currentValue}
                                    maxValue={maxValue}
                                    error={
                                        maxValue <= startValue ||
                                        maxValue <= 0 ||
                                        startValue < 0 ||
                                        maxValue <= startValue
                                    }
                />
                <SetValueButtons inc={incFunc}
                                 reset={resetFunc}
                                 incDisable={
                                     currentValue < startValue ||
                                     currentValue >= maxValue ||
                                     startValue < 0 ||
                                     maxValue <= startValue ||
                                     maxValueFromLocalStorage !== maxValue ||
                                     startValueFromLocalStorage !== startValue
                                 }
                                 resetDisable={
                                     currentValue <= startValue ||
                                     currentValue === 0 ||
                                     startValue < 0 ||
                                     maxValue <= startValue ||
                                     maxValueFromLocalStorage !== maxValue ||
                                     startValueFromLocalStorage !== startValue
                                 }
                />
            </div>
        </div>
    );
}

export default Counter;