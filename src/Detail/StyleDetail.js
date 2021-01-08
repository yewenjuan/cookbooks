import styled from "styled-components";

const StyledDetail = styled.div `
.img-contain {
  width: 100%auto;
  height: 180px;
  img {
    width: 100%;
    height: 180px;
    background-size: 100% 100%;
  }
}
.text-contain {
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  .title {
    font-size: 20px;
    font-weight: 700;
  }
  .conn {
    font-size: 12px;
    padding: 10px 0;
  }
  .draw {
    width: 130px;
    height: 44px;
    background-color: #ee742f;
    border-radius: 6px;
    color:#fff;
    text-align: center;
    line-height: 44px;
  }
}
 
`

export {
  StyledDetail
}