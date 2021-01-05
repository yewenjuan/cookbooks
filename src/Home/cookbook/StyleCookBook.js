import styled from "styled-components";

import {ellipsis} from "@assets/styled/ellipsis"

const Container = styled.div `
  header {
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    background-color: #ee742f;
  }
`

const TextEllipsis = ellipsis(
  styled.p ``
)

export {
  Container,
  TextEllipsis
}