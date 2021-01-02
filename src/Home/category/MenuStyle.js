import styled from "styled-components";

const MenuWrapper = styled.div `
  flex: 1;
  display: flex;
  overflow: hidden;
  aside {
    width: 90px;
    overflow-y: scroll;
    ul {
      li {
        height: 50px;
        text-align: center;
        line-height: 50px;
        &.active {
          background-color: #fff;
          color: #ee742f;
          span{
            display: inline-block;
            height: 100%;
            border-bottom: 1px solid #ee742f;
          }
        }
      }
    }
  }
  section {
    flex:1;
    padding: 25px;
    background-color:#fff;
    overflow-y: scroll;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 33.3333%;
        height: 45px;
        text-align: center;
      }
    }
  }
`

export {
  MenuWrapper
}