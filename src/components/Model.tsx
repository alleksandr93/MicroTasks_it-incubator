import React from 'react';
import {adidasArr} from './pages/Adidas';
import {useParams} from 'react-router-dom';
import {SnickersItem} from '../App';

export const ModelAdidas = () => {
    const params = useParams()

    let model = adidasArr.find(el => el.id === params.id)
        console.log(model)
    return (
        <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'space-between'}}>
            <h2>{model?.model}</h2>
            <h3>{model?.collection}</h3>
            <h3>{model?.price}</h3>
            <div style={{textAlign: 'center'}}>
                <img style={{width: '90%'}} src={model?.picture} alt=""/>
            </div>

        </div>
    );
}
    ;

