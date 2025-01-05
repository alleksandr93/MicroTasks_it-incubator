import React from 'react';
import {useParams} from 'react-router-dom';

export const ModelError = () => {
    const params = useParams()

    return <h1>Модуль отсутствует</h1>
};

