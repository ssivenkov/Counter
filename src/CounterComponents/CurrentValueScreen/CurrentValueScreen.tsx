import React from 'react';
import s from './CurrentValueScreen.module.css';

type currentValueType = {
    currentValue: number | string
    maxValue: number
    error: boolean
}

function CurrentValue(props:currentValueType) {
    if (Number.isInteger(props.currentValue)) {
        if (props.currentValue >= props.maxValue) {
            return <span className={s.counterBoardMax}>
                {props.currentValue}
            </span>
        } else {
            return <span className={s.counterBoard}>
                {props.currentValue}
            </span>
        }
    } else {
        return (
            <span className={`${s.counterBoardText} ${props.error ? s.counterBoardErrorText : ''}`}>
                {props.currentValue}
            </span>
        )
    }
}

export function CurrentValueScreen(props: currentValueType) {
    return (
        <div className={props.error ? s.counterBoardError : s.counterBoard}>
            <CurrentValue currentValue={props.currentValue} maxValue={props.maxValue} error={props.error}/>
        </div>
    )
}