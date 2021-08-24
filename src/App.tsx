import React from 'react';
import s from './App.module.css';
import Counter from './Counter/Counter';

function App() {
    return (
        <div className={s.background}>
            <Counter/>
        </div>
    );
}

export default App;