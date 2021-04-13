import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './header.module.css'
import {PATH} from "./Routes";

function Header() {
    return (

        <div className={s.dropdown}>
            <button className={s.dropbtn}></button>
            <nav className={s.dropdownContent}>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.activeLink}> PreJunior </NavLink>
                <NavLink to={PATH.JUNIOR} activeClassName={s.activeLink}> Junior </NavLink>
                <NavLink to={PATH.JUNIORPLUS} activeClassName={s.activeLink}> Junior+ </NavLink>
            </nav>
        </div>


    )
}

export default Header
