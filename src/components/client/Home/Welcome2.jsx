import React from 'react'
import { NavLink } from "react-router-dom";
import './Welcome2.css'

const Welcome2 = () => {
    return (
        <div className='welcome2'>
            <div className='articlee'>
                <h4>Italian Restaurant</h4>
                <h2>WELCOME</h2>
                <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
                <NavLink to="about">OUR STORY →</NavLink>
            </div>
            
            <div className='img'><img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg.webp" alt="" /></div>
        </div>
    )
}

export default Welcome2