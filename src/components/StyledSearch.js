import styled from "styled-components";

const Container = styled.div `  
  padding: 10px 15px;  
  background-color: ${(props) => props.outbg};
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border:${(props) => (props.hasBorder ? '1px solid #ee742f': "")};
    border-radius: 6px;
    background-color: ${(props) => props.innerbg};
    svg {
      width: 18px;
      height: 18px;
      margin-right: 6px;
      fill: #ee742f;
    }
    span {
      color: #666;
    }
  }
`

export {
  Container
}