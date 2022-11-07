import styled from "styled-components";
import {Link} from 'react-router-dom'

const Container = styled(Link)`
  border-radius: 3px;
  overflow: hidden;
  width: 22%;
  background-color: ${(props) =>
    props.theme.dark ? props.theme.colors.darkEl : props.theme.colors.lightEl};
  box-shadow: ${(props) => props.theme.css.shadow};
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 1350px) {
    width: 30%;
  }
  @media (max-width: 1100px) {
    width: 29%;
  }
  @media(max-width:900px){
    width: 45%;
  }
  @media(max-width:600px){
    width: 100%;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 180px;
  min-height: 100px;

  background-color: black;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
const Content = styled.div`
  padding: 20px;
`;

const Wraper = styled.div`
  padding: 10px 0;
  line-height: 1.6;
`;

export {Container,Image,Img,Content,Wraper}