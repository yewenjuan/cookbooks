import React from 'react';
import {
  NavBar
} from "antd-mobile";

import { StyleNav } from "../more/StyledMore"


export default function Map() {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <StyleNav>
        <NavBar
          mode="light"      
        >美食地图</NavBar>
      </StyleNav>  
      <iframe 
        style={{width: '100%', height: '100%'}}
        src="/map.html" 
        title="ifrm"        
        frameBorder="0"
      ></iframe>
    </div>
  )
}
