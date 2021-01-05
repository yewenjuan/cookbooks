import styled from "styled-components";

const StyledMore = styled.div `
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  align-items: center;
  span {
    padding-right: 10px;
  }
`

const StyleNav = styled.div `
  .am-navbar-light {
    background-color: #ee742f;
    & .am-navbar-title {
      color:#fff;
    }
  }
`

export {
  StyledMore,
  StyleNav
}