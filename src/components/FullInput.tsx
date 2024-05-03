import React, {KeyboardEvent, ChangeEvent, useState} from 'react';



type FullInputProps = {
    addMessage: (title: string) => void
}
export const FullInput = (props: FullInputProps) => {
    const [title, setTitle] = useState('')
    const changeInputHeandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }
    const onKeyPressHeandker = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.addMessage(title)
            setTitle('')
      
        }
    }
    const onClickButtonHeandler = () => {
        props.addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onKeyPress={onKeyPressHeandker} onChange={changeInputHeandler}/>
            <button onClick={onClickButtonHeandler}>+</button>
        </div>
    );
};

