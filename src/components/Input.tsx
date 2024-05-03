import React, {ChangeEvent, KeyboardEvent, useState} from 'react';


type InputProps = {
    addMessage: () => void
    value: string
    setTitle: (title: string) => void

}
export const Input = (props: InputProps) => {
    const onChangeInputHeandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    const onKeyInputPressHeandler = (event:KeyboardEvent<HTMLInputElement>) => {
if(event.key ==='Enter'){
    props.addMessage()
}
    }
    return (
        <div>
            <input value={props.value} onKeyPress={onKeyInputPressHeandler} onChange={onChangeInputHeandler}/>

        </div>
    );
};

