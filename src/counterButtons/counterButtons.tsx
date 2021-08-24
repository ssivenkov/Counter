import React from 'react';
import s from './counterButtons.module.css';

type CounterButtonsType = {
    inc: () => void
    reset: () => void
    count: number
}

export function CounterButtons(props: CounterButtonsType) {
    return (
        <div className={s.counterButtonContainer}>
            <div className={s.ButtonsContainer}>
                <button onClick={ () => {props.inc()} }
                     disabled={props.count >= 5}
                     className={s.inc_btn + ' ' + (props.count >= 5 ? s.disable_btn : '')}>inc</button>
                <button onClick={ () => {props.reset()} }
                     disabled={props.count <= 1}
                     className={s.reset_btn + ' ' + (props.count === 1 ? s.disable_btn : '')}>reset</button>
            </div>
        </div>
    );
}