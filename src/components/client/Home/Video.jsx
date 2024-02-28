import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import './Video.css'
import { FaPlay } from "react-icons/fa";
const Video = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='modal'>
      <div>
        <p>Discover</p>
        <h2>OUR VIDEO</h2>
        
      <div className='play' onClick={() => setOpen(true)} >
        
      <FaPlay />

      </div>
      
      </div>
      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        style={{
            width:"100%",
            height:"100vh",
            backgroundColor:"transparent"
        }}
      >
<iframe width="100%" height="550" src="https://www.youtube.com/embed/5k1hSu2gdKE?si=DD2o-dzfXG1rsKkT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      </Modal>
    </div>
  );
};
export default Video;