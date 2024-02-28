import React from 'react'
import './DiscoverMenu.css'
import { NavLink } from 'react-router-dom'

const DiscoverMenu = () => {
    return (
        <div className='discoverMenu'>
            <p>Discover</p>
            <h2>OUR MENU</h2>
            <div className='discoverDivs'>
                <div className='first4'>
                    <div className='LunchDinner'>
                        <div className='lunch'> <NavLink to='menu' className='btn'>LUNCH</NavLink></div>
                        <div className='dinner'><NavLink to='menu' className='btn'>DINNER</NavLink></div>
                    </div>
                    <div className='DrinkStart'>
                        <div className='drinks'><NavLink to='menu' className='btn'>DRINKS</NavLink></div>
                        <div className='start'><NavLink to='menu' className='btn'>STARTERS</NavLink></div>
                    </div>
                </div>
                <div className='HappyDesert'>
                    <div className='happy'><NavLink to='menu' className='btn'> HAPPY HOUR</NavLink></div>
                    <div className='desert'><NavLink to='menu' className='btn'>DESSERT</NavLink></div>
                </div>
            </div>
        </div>
    )
}

export default DiscoverMenu