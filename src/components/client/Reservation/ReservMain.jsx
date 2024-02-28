import React, { useState } from 'react'
import './ReservMain.css'

const ReservMain = () => {
const [nameInp,setNameInp]=useState("")
const [timeInp,setTimeInp]=useState("")
    const addReserv=()=>{
        fetch('http://localhost:8080/reservations', {
          method: 'POST',
          body: JSON.stringify({
            name: nameInp,
            id: timeInp,

          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((json) =>  alert("Your Reservation is ready"));
      }
    return (
        <div className='reservation'>
            <div className='divForm'>
        <p>Reservation</p>
        <h2>BOOK TABLE</h2>
        <div className="one-div">

        <form className="reservation-form">
            <div className="form-column">
                <label for="time">Time:</label>
                <input type="date" id="time" name="time" placeholder="Enter time" value={timeInp} onChange={(e)=>setTimeInp(e.target.value)}/>

                <label for="hour">Hour:</label>
                <select id="hour" name="hour">
                    <option value="1">1 hour</option>
                    <option value="2">2 hours</option>
                    <option value="3">3 hours</option>
                </select>

                <label for="people">Number of People:</label>
                <select id="people" name="people">
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                </select>
            </div>

            <div className="form-column">
                <label for="name">Name:</label>
                <input type="text" value={nameInp} onChange={(e)=>setNameInp(e.target.value)} id="name" name="name" placeholder="Enter your name"/>

                <label for="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number"/>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address"/>
            </div>


        </form>
        <button type="submit" class="submit-button" onClick={addReserv}>BOOK TABLE</button>
    </div>
            </div>
            
            <div className='img'><img src="https://preview.colorlib.com/theme/pato/images/booking-01.jpg.webp" alt="" /></div>
        </div>
    )
}

export default ReservMain;