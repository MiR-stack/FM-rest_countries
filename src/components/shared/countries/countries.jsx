import styled from "styled-components";
import { Flex } from "../../utils/utils.styled";
import Card from "../card/card";


const Container = styled(Flex)`
    gap: 50px;
    width: 100%;
    @media(max-width:375px){
    gap:20px
  }
`

function Countries({ Countries,handleCountry }) {
  return (
    <Container>
      {Countries.map((country,index) => (
        <Card key={index} country={country} handleCountry={handleCountry}/>
      ))}
    </Container>
  );
}

export default Countries;
