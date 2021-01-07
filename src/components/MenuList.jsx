import React from 'react';
import { withRouter } from "react-router-dom";

import { MenuWrapper } from "./MenuStyle.js";

 function MenuList(props) {
  let cate = props.category;  
  let { curcate } = props;
  function handleClick(title) {
    props.history.push("/list", {title})
  }
  return (    
    <MenuWrapper>
      <aside>
        <ul>
          {
            cate && Object.keys(cate).map(value => {
              return  <li 
                className={curcate === value ? "active" : ""} 
                key={value}
                onClick={() => props.handleAsideClick(value)}
                >
                  <span>{value}</span>
              </li>                
            })
          }       
       
        </ul>
      </aside>
      <section>
        <ul>
          {
            cate && curcate && cate[curcate].map((value, index) => (
              <li 
                key={index}
                onClick={() => handleClick(value)}
              >{value}</li>
            ))
          }
        </ul>
      </section>
    </MenuWrapper>
  )
}  

export default withRouter(MenuList)
 

