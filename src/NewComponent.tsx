import {Button} from './components/Button';
import React from 'react';
import {FilterType} from './App';

type ComponentPropsType = {
    money: Array<MoneyPropsType>
    onClickFilterHandler:(nameButton: FilterType)=>void
}
type MoneyPropsType = {
    banknots: string
    value: number
    number: string
}

export const NewComponent = (props: ComponentPropsType) => {
    return (
        <>
            <ul>
                {props.money.map((el, index) => {
                    return <li key={index + 1}>
                        <span>{el.banknots} </span>
                        <span>{el.value}</span>
                        <span>{el.number}</span>
                    </li>
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <Button name={'all'} callBack={() => props.onClickFilterHandler('all')}/>
                <Button name={'ruble'} callBack={() => props.onClickFilterHandler('ruble')}/>
                <Button name={'dollar'} callBack={() => props.onClickFilterHandler('dollar')}/>
            </div>

        </>
    )

}