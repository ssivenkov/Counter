import React, {useState} from 'react';
import s from './Counter.module.css';
import {CounterBoard} from '../counterBoard/counterBoard';
import {CounterButtons} from "../counterButtons/counterButtons";

function Counter() {
    let [count, setCount] = useState(1)

    let incFunc = function () {
        setCount(count + 1)
    }

    let resetFunc = function () {
        setCount(1)
    }

    return (
        <div className={s.counterBody}>
            <CounterBoard count={count}/>
            <CounterButtons inc={incFunc} reset={resetFunc} count={count}/>
        </div>
    );
}

export default Counter;