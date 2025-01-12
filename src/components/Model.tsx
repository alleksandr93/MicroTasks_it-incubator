import React from 'react';
import {useParams} from 'react-router-dom';
import {SnickersItem} from '../App';
import {adidasArr} from './pages/Adidas';
import {pumaArr} from './pages/Puma';
import ProductUnavailable from './pages/ProductUnavailable';

type CrossModelsType = {
    [key: string]: SnickersItem[];
}
const crossModels: CrossModelsType = {
    adidas: adidasArr,
    puma: pumaArr
}
export const Model = () => {
    const {id, module} = useParams()
    let model
    if (module) {
        model = crossModels[module].find(el => el.id === id)
    } else {
        model = null
    }
    console.log(model)

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    }}>
        {model ? <>
                <h2>{model.model}</h2>
                <h3>{model.collection}</h3>
                <h3>{model.price}</h3>
                <div style={{textAlign: 'center'}}>
                    <img style={{width: '90%'}} src={model.picture} alt=""/>
                </div>
            </>
            : <ProductUnavailable/>}

    </div>
}