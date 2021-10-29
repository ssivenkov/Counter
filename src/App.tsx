import React from 'react';
import s from './App.module.scss';
import Counter from './CounterComponents/Counter/Counter';

function App() {
    return (
        <div className={s.background}>
            <Counter/>
        </div>
    );
}

export default App;