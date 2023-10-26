import React, { useEffect } from 'react'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        const chk = document.querySelector('.header .navtoggle')
        chk.checked = false
    }, [location.pathname])

    return (
        <div className="header">
            <div className="logo" onClick={() => { history.push('/home') }}></div>
            <div className="nav">
                <input type="checkbox" id="navtoggle" className='navtoggle' />
                <div className="options">
                    <div className="menus" id="links">
                        <NavLink to="/home/bmi" activeClassName="menu_act" className="link">bmi</NavLink>
                        <NavLink to="/home/cal_calc" activeClassName="menu_act" className="link"> calorie calc </NavLink>
                        <NavLink to="/home/nutrition" activeClassName="menu_act" className="link"> nutrition </NavLink>
                        <NavLink to="/home/fitness" activeClassName="menu_act" className="link"> fitness </NavLink>


                    </div>
                    <div id="head" className="head">Menu</div>
                </div>
                <label htmlFor='navtoggle' >
                    <span></span><span></span><span></span>
                </label>

            </div>
        </div>
    )
}
