import React from 'react';

import { MenuWrapper } from "./MenuStyle.js";


export default function MenuList(props) {
  let cate = props.category;
  return (    
    <MenuWrapper>
      <aside>
        <ul>
          {
            cate && Object.keys(cate).map(value => {
              return  <li 
                className={props.curcate === value ? "active" : ""} 
                key={value}
                onClick={() => props.handleAsideClick(value)}
                >
                  <span>{value}</span>
              </li>                
            })
          }       
       
        </ul>
      </aside>
      {/* <section>
        <ul>
          {
            cate && cate[props.curcate].map((value, index) => (
              <li key={index}>{value}</li>
            ))
          }
        </ul>
      </section> */}
    </MenuWrapper>
  )
}  
 

