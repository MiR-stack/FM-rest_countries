import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Wraper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: ${(props) => props.theme.css.shadow};
  border-radius: 3px;
  background-color: ${(props) =>
    props.theme.dark ? props.theme.colors.darkEl : props.theme.colors.lightEl};
  @media (max-width: 375px) {
    width: 100%;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 250px;
  color: ${(props) =>
    props.theme.dark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  &::placeholder {
    color: ${(props) =>
      props.theme.dark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  }
  font-weight: 300;

  @media (max-width: 375px) {
    width: 100%;
  }
`;

const Icon = styled(FaSearch)`
  cursor: pointer;
  color: ${(props) =>
    props.theme.dark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
`;

export { Wraper, Input, Icon };
