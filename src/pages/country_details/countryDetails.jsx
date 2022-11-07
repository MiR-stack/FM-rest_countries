import React from "react";
import { Text } from "../../components/ui/text.styled";
import PageLayout from "../../layouts/pageLayout";
import { ModeButton } from "../../layouts/pageLayout.styled";
import { Button } from "../../components/ui/button.styled";
import {
  Arrow,
  Container,
  Flag,
  Wraper,
  Image,
  Content,
  ContentBody,
  ContentChild,
  ContentFooter,
} from "./countryDetails.styled";

function Country({ country, dark, handleMode,handleCountry }) {


  const name = country.name;

  let currencies = [];
  if (country.currencies) {
    currencies = Object.keys(country.currencies);
  }

  let nativeName;
  let languages = [];
  let borders = [];
  let flags = {};
  if (name) {
    nativeName = Object.keys(name.nativeName)[0];
    nativeName = name.nativeName[nativeName].official;

    languages = Object.keys(country.languages).map(
      (key) => country.languages[key]
    );

    flags = country.flags;

    borders = country.borders;
  }

  return (
    <PageLayout dark={dark} handleMode={handleMode}>
      <Container>
        <Button variant='iconButton' to='/'>
          <Arrow />
          Back
        </Button>
        <Wraper>
          <Flag>
            <Image src={flags.svg} alt={name && name.common} />
          </Flag>
          <Content>
            <Text as="h2" variant="title">
              {name && name.common}{" "}
            </Text>
            {country.name && (
              <>
                <ContentBody>
                  <ContentChild>
                    <p>
                      <Text variant="bold"> Native Name: </Text>
                      <Text>{nativeName} </Text>
                    </p>
                    <p>
                      <Text variant="bold"> population: </Text>
                      <Text>{country.population} </Text>
                    </p>
                    <p>
                      <Text variant="bold"> Region: </Text>
                      <Text>{country.region} </Text>
                    </p>
                    <p>
                      <Text variant="bold"> Sub Region: </Text>
                      <Text>{country.subregion} </Text>
                    </p>
                    <p>
                      <Text variant="bold"> Capital: </Text>
                      <Text>{country.capital} </Text>
                    </p>
                  </ContentChild>
                  <ContentChild>
                    <p>
                      <Text variant="bold"> top lavel domain: </Text>
                      <Text>{country.tld} </Text>
                    </p>
                    <p>
                      <Text variant="bold"> currencies: </Text>
                      {currencies.map((currency) => (
                        <Text key={currency}>{currency} ,</Text>
                      ))}
                    </p>
                    <p>
                      <Text variant="bold"> languages: </Text>
                      {languages.map((language) => (
                        <Text key={language}>{language} ,</Text>
                      ))}
                    </p>
                  </ContentChild>
                </ContentBody>
                <ContentFooter>
                  <Text variant="bold"> border Countries: </Text>
                  {borders.map((border) => (
                    <Button key={border} to={'/countryDetails'} onClick={()=>handleCountry(border)}>{border} </Button>
                  ))}
                </ContentFooter>
              </>
            )}
          </Content>
        </Wraper>
      </Container>
    </PageLayout>
  );
}

export default Country;
