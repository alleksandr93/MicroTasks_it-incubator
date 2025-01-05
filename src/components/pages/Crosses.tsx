import React from 'react';
import {Outlet} from 'react-router-dom';

export const Crosses = () => {
    return (
        <div>
            <div style={{borderBottom:'3px solid black'}}>HEADER</div>
            <Outlet/>
            <div style={{borderTop:'3px solid black'}}>FOOTER</div>
        </div>
    );
};

