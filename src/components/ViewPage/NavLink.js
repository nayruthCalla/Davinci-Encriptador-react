import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

export const NavLink=({to, label, activeOnlyWhenExact})=>{
    let match = useRouteMatch({
        path: to,
        exact:activeOnlyWhenExact
    })
    return(
        <li className={match?'active':''}>
            <Link to={to} >{label}</Link>
        </li>
    )
};