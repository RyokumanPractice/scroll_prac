import styled from "styled-components";
import animations from "./animations";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  ${(props) => {
    const color: string | undefined = props.color;
    console.log(color);
    if (color) return animations(color);
  }}
`;

export default Container;
