import styled from "styled-components";

const ellipsis = (Comp) => {
  return styled(Comp) `
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({rowNum}) => rowNum};
    -webkit-box-orient: vertical;
  `
}
export {
  ellipsis
}