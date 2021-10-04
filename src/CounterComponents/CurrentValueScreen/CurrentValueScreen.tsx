import React from "react";
import s from "./CurrentValueScreen.module.css";

type currentValueType = {
    currentValue: number | undefined
    errorMessage: string
    maxValue: number
    startValue: number
}

type currentValueScreenType = {
    currentValue: number | undefined
    maxValue: number
    startValue: number
}

function CurrentValue(props: currentValueType) {
    const currentValueEqualMaxValue = props.currentValue === props.maxValue ? s.counterBoardMax : "";

    if (props.currentValue !== undefined) {
        return <span className={s.counterBoard}>
                <span className={currentValueEqualMaxValue}>{props.currentValue}</span>
            </span>
    } else if (props.errorMessage === "") {
        return <span className={s.counterBoardText}>Enter values and press 'set'</span>
    } else return <span className={s.counterBoardErrorText}>{props.errorMessage}</span>
}

export function CurrentValueScreen(props: currentValueScreenType) {
    let errorMessage = "";
    if (props.startValue < 0 || props.maxValue <= props.startValue) {
        errorMessage = "Incorrect value!"
    }

    return (
        <div className={errorMessage === "" ? s.counterBoard : s.counterBoardError}>
            <CurrentValue currentValue={props.currentValue}
                          maxValue={props.maxValue}
                          startValue={props.startValue}
                          errorMessage={errorMessage}/>
        </div>
    )
}