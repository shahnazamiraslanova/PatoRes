import React, { useState } from 'react'

function Contact() {
  const [nameInp,setNameInp]=useState("")
  const [mailInp,setmailInp]=useState("")
  const [messageInp,setmessageInp]=useState("")


  const addMesagge=()=>{
  fetch('http://localhost:8080/messages', {
    method: 'POST',
    body: JSON.stringify({
      name: nameInp,
      mail: mailInp,
      message:messageInp,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
  return (
    <div>
 <div style={{
        background: "url('https://preview.colorlib.com/theme/pato/images/bg-title-page-02.jpg.webp') center/cover",
        height: "75vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
      }}>
        <h1>CONTACT US</h1>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15019485.388351148!2d-113.27639607020481!3d23.211533517756823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2sMexico!5e0!3m2!1sen!2saz!4v1702211585759!5m2!1sen!2saz"  style={{border:0,width:"100%",height:"600px",padding:"100px 200px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
    
    <div className='message' style={{padding:"100px 200px"}}>
      <h3 style={{textAlign:"center",fontSize:"30px"}}>SEND US MESSAGE</h3>
      <div style={{
        padding:"20px 100px",
        display:"flex",
        justifyContent:'space-around',
        flexWrap:"wrap",
        gap:5
        
      }}>
<input style={{padding:"15px 30px",border:"1px solid #666",borderRadius:10}} value={nameInp} onChange={(e)=>setNameInp(e.target.value)} type="text"  placeholder='Name'/>
<input style={{padding:"15px 30px",border:"1px solid #666",borderRadius:10}} value={mailInp} onChange={(e)=>setmailInp(e.target.value)}  type="email" placeholder='Email' />
<input style={{padding:"15px 30px",border:"1px solid #666",borderRadius:10}}  type="text" placeholder='Phone' />
      </div>
      <div  style={{
        padding:"35px 130px"
        
      }}>
<textarea value={messageInp} onChange={(e)=>setmessageInp(e.target.value)} style={{width:"100%",border:"1px solid #666",borderRadius:10}} name="" id="" cols="30" rows="10"></textarea>    
  </div>
  <button 
  onClick={addMesagge}
  style={{
    backgroundColor:"black",
    color:"white",
    border:"none",
    display:"block",
    padding:"12px 28px",
    borderRadius:10,
    margin:"1px auto"
  }}>SUBMIT</button>
    </div>
    </div>
  )
}

export default Contact