import PropTypes from "prop-types";
import { useState } from "react";
import { Wraper, Icon, Input } from "./search.styled";

function Search({  handleSearch }) {
  const [searchTerms, setSearchTearms] = useState("");

  function handleChange(e) {
    setSearchTearms(e.target.value);
  }

  function handleKeypress(e){
    if(e.key === 'Enter'){
      handleSearch(searchTerms)
    }
  }

  return (
    <Wraper  onKeyPress={handleKeypress}>
      <Icon
        
        onClick={() => {
          handleSearch(searchTerms);
        }}
      />
      <Input
        type='search'
        value={searchTerms}
        placeholder="Search for a country..."
        onChange={handleChange}
      />
    </Wraper>
  );
}

export default Search;

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
