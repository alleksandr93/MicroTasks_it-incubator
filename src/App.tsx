import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body';
import {Footer} from './site/Footer';
import {log} from 'node:util';
import {Button} from './components/Button';
import {FullInput} from './components/FullInput';
import {Input} from './components/Input';

export type FilterType = 'all' | 'ruble' | 'dollar'

function App() {
    const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    const [title, setTitle] = useState('')
    const addMessage = () => {
        setMessage([{message: title}, ...message])
        setTitle('')
    }

    return (
        <div className={'App'}>
            {/*<FullInput addMessage={addMessage}/>*/}
            <div className={'InputButton'}>
                <Input value={title} setTitle={setTitle} addMessage={addMessage}/>
                <Button name={'+'} callBack={addMessage}/>
            </div>

            {message.map((el, index) => {
                return <div key={index}>{el.message}</div>
            })}
        </div>
    );
}

export default App;
