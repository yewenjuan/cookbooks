import React from 'react';

import { TextEllipsis } from "./StyleCookBook"

export default function  TopFood(props) {
  if(props.list.hotCateList) {
    var topList = props.list.hotCateList.slice(0, 4);
  }else {
    return null
  }  
  return (
    <div>
      <h3 className="top-text">精品分类</h3>
      <ul className="top-food">
        {
          topList.map(value => (
            <li className="food-item" key={value.id}>
              <div>
                <img src={require(`../../assets/images/${value.imgUrl}`).default} alt=""/>
              </div>
              <div>
                <p>{value.foodName}</p>
                <TextEllipsis rowNum={1}><span>{value.browse}</span>次浏览<span>{value.connect}</span>次收藏</TextEllipsis>
              </div>
            </li>
          ))
        }       
      </ul>
    </div>
  )
}
