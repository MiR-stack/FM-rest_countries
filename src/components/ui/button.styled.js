import { Link } from "react-router-dom";
import styled from "styled-components";


const variant = {
  iconButton : `
    padding:10px 20px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:5px;
  `
}

const Button = styled(Link)`
  border: none;
  outline: none;
  background-color: ${(props) =>
    props.theme.dark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};

  color: ${(props) => (props.theme.dark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)")};
  box-shadow: ${props => props.theme.css.shadow};
  padding: 5px 10px;
  border-radius: 3px;
  ${props => variant[props.variant]}
  text-decoration:none;

`;

export { Button };
