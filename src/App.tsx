import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body';
import {Footer} from './site/Footer';
import {NewComponent} from './NewComponent';
import {log} from 'node:util';
import {Button} from './components/Button';

export type FilterType = 'all' | 'ruble' | 'dollar'

function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLES', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLES', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLES', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('all')
    let  currentMoney = money
    if (filter === 'ruble'){
        currentMoney = money.filter(el=>el.banknots === 'RUBLES')
    } else if (filter === 'dollar') {
        currentMoney = money.filter(el=>el.banknots === 'Dollars')
    }
    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }


    return (
        <NewComponent money={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
    );
}

export default App;
