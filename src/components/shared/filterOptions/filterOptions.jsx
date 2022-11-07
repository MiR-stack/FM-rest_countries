import styled from "styled-components";

const Select = styled.select`
  padding: 10px;
  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.theme.dark ? props.theme.colors.darkEl : props.theme.colors.ligthEl};

  color: ${(props) => (props.theme.dark ? props.theme.colors.darkText : props.theme.colors.ligthText)};
  box-shadow: ${props => props.theme.css.shadow};
  @media(max-width:600px){
    width: 100%;
  }
`;

function FilterOptions({ handleChange }) {
  return (
    <Select name="region" onChange={handleChange}>
      <option value="">Filter by region</option>
      <option value="africa">Africa</option>
      <option value="america">america</option>
      <option value="asia">asia</option>
      <option value="europe">europe</option>
      <option value="oceania">oceania</option>
    </Select>
  );
}

export default FilterOptions;
