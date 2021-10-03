import React from 'react';
import s from './App.module.css';
import Counter from './CounterComponents/Counter/Counter';

function App(props: any) {
    return (
        <div className={s.background}>
            <Counter/>
        </div>
    );
}

export default App;