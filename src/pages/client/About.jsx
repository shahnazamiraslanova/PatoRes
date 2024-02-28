import React from 'react'
import Video from '../../components/client/Home/Video.jsx'
import Welcome2 from '../../components/client/Home/Welcome2.jsx'
import Sign from '../../components/client/Home/Sign.jsx'

function About() {
  return (

    <div>
      <div style={{
        background: "url('https://preview.colorlib.com/theme/pato/images/bg-title-page-03.jpg.webp') center/cover",
        height: "75vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
      }}>
        <h1>ABOUT US</h1>
      </div>

      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"50px 300px"}}>
        <p style={{color:"red"}}>Italian Restaurant</p>
        <h2 style={{fontSize:50,marginBottom:-50}}>OUR STORY</h2>
        <p style={{color:"#666",fontSize:20}}>Fusce at risus eget mi auctor pulvinar. Suspendisse maximus venenatis pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam purus purus, lacinia a scelerisque in, luctus vel felis. Donec odio diam, dignissim a efficitur at, efficitur et est. Pellentesque semper est ut pulvinar ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla et leo accumsan, egestas velit ac, fringilla tortor. Sed varius justo sed luctus mattis.</p>
      </div>
      <Video/>
      <Welcome2/>
      <Sign/>
    </div>

  )
}

export default About