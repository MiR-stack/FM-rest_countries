import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import FilterOptions from "../filterOptions/filterOptions";
import Search from "../search/search";

const Wraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap:20px ;
  flex-wrap: wrap;
`;

function Filter({ handleData, handleLoading }) {
  const initTerms = {
    search: "",
    region: "",
  };
  const [filter, setFilter] = useState(initTerms);

  function handleChange(e) {
    const { name, value } = e.target;
    setFilter({ [name]: value });
  }

  function handleSearch(terms ) {
    setFilter({ search: terms });
  }

  const url = {
    default:    "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags",
    region: `https://restcountries.com/v3.1/region/${filter.region}?fields=name,population,capital,region,flags`,
    search: `https://restcountries.com/v3.1/name/${filter.search}?fields=name,population,capital,region,flags`,
  };

  useEffect(() => {
    handleLoading(true);
    (async () => {
      const data = (await axios.get(filter.region?url.region:url.default)).data.slice(0, 8);
      if (data) {
        handleData(data);
      }
    })();
    handleData([]);
    handleLoading(false);
  }, [filter.region]);

  useEffect(() => {
    handleLoading(true);
    (async () => {
      const data = (await axios.get(filter.search?url.search:url.default)).data.slice(0, 8);
      if (data) {
        handleData(data);
      }
    })();
    handleData([]);
    handleLoading(false);
  }, [filter.search]);
  return (
    <Wraper>
      <Search handleSearch={handleSearch} />
      <FilterOptions value={filter.region} handleChange={handleChange} />
    </Wraper>
  );
}

export default Filter;
