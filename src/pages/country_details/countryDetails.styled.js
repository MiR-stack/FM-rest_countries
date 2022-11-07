import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  margin-top: 50px;
  width:100%;

  @media(max-width:700px){
    gap:20px;
    margin-top:10px;
  }
`;

const Arrow = styled(BsArrowLeft)`
  color: ${(props) =>
    props.theme.dark ? props.theme.colors.darkText : props.theme.colors.lightText};
`;

const Wraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  width:100%;
  flex-wrap: wrap;
`;

const Flag = styled.div`
  height: 400px;
  width: 40%;

  @media(max-width:1000px){
    width: 46%;
  }

  @media(max-width:700px){
    width: 100%;
  }
  @media(max-width:375px){
   height: 200px;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Content = styled(Container)`
  margin: 0;
  gap: 20px;
  width: 50%;

  @media(max-width:1000px){
    width: 46%;
  }
  @media(max-width:700px){
    width: 100%;
  }
`;

const ContentBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap:30px;
  line-height: 1.8;

  @media(max-width:1100px){
    flex-direction: column;
  }
`;

const ContentChild = styled.div`

`;

const ContentFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;


export {
  Container,
  Arrow,
  Wraper,
  Flag,
  Image,
  Content,
  ContentBody,
  ContentChild,
  ContentFooter,
};
