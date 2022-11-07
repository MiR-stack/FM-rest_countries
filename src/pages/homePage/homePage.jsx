import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Countries from "../../components/shared/countries/countries";
import Filter from "../../components/shared/filter/filter";
import Loading from "../../components/shared/loading/loading";
import PageLayout from "../../layouts/pageLayout";

const Container = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  @media(max-width:600px){
    margin-top: 10px;
    gap:20px
  }
`;

function Home({ dark, handleMode ,handleCountry}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url =
    "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags";

  useEffect(() => {
    (async () => {
      const newData = await (await axios.get(url)).data.slice(0, 8);
      setData(newData);
      setLoading(false);
    })();
  }, []);

  function handleLoading(load){
    setLoading(load)
  }

  function handleData(filteredData) {
    setData(filteredData);
  }
  return (
    <PageLayout dark={dark} handleMode={handleMode}>
      <Container>
        <Filter handleData={handleData}  handleLoading={handleLoading}/>
        {loading ? <Loading /> : <Countries Countries={data} handleCountry={handleCountry}/>}
      </Container>
    </PageLayout>
  );
}

export default Home;
