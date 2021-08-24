import React from 'react';
import s from './counterBoard.module.css';

type currentValueType = {
    number: number
}

function CurrentValue(props:currentValueType) {
    if (props.number >= 5) {
        return <span className={s.counterBoardMax}>{props.number}</span>
    } else {
        return <span className={s.counterBoard}>{props.number}</span>
    }
}

type CounterBoardType = {
    count: number
}

export function CounterBoard(props: CounterBoardType) {
    return (
        <div className={s.counterBoard}>
            <CurrentValue number={props.count} />
        </div>
    )
}