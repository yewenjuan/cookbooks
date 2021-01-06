import styled from "styled-components";

const StyleList = styled.ul `
  li {
    display: flex;
    padding: 10px;
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
  }
`
export {
  StyleList
}