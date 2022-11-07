import { Text } from "../../ui/text.styled";
import {Container,Image,Img,Wraper,Content} from './card.styled'

function Card({ country ,handleCountry}) {
  return (
    <Container to={`/countryDetails`} onClick={()=>{handleCountry(country.name.common)}}>
      <Image>
        <Img src={country.flags.svg} alt={country.name.common} />
      </Image>
      <Content>
        <Text as="h2" variant="cardTitle">
          {country.name.common}{" "}
        </Text>
        <Wraper>
          <p>
            <Text variant="bold">population : </Text>
            <Text>{country.population} </Text>
          </p>
          <p>
            <Text variant="bold">region : </Text>
            <Text>{country.region} </Text>
          </p>
          <p>
            <Text variant="bold">capital : </Text>
            <Text>{country.capital} </Text>
          </p>
        </Wraper>
      </Content>
    </Container>
  );
}

export default Card;
