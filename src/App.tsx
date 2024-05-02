import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body';
import {Footer} from './site/Footer';
import {NewComponent} from './NewComponent';
import {log} from 'node:util';
import {Button} from './components/Button';

function App() {
    let [a, setA] = useState(1)
    const onClickHandler = () => {
        setA(++a)
    }
    const onClickResetHamdler = () => {
        setA(a = 0)
    }
    return (
        <>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickResetHamdler}>0</button>
        </>

    );
}

export default App;
