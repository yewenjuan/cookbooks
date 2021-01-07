import styled from "styled-components";

import border from "@assets/styled/border.js"

const StyleList = border(
  styled.li `
    display: flex;
    padding: 10px;
    background-color: #fff;
    img {
      margin-right: 15px;
    }
    > div:last-child {
      h3 {
        padding-top:10px;
        font-size: 16px;
      }
      .show-text {
        font-size: 14px;
        padding-top:6px;
      }
      p:last-child {
        padding-top:6px;
        font-size: 12px;
        color: #999;
      }
    }
`
)
export {
  StyleList
}