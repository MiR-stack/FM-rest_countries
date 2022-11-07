import styled from "styled-components";

const variants = {
  title: `font-weight:800`,
  appTitle: `font-weight:800;
    @media(max-width:500px){
      font-size:14px;
    }
  `,
  bold: `font-weight:600`,
  cardTitle: `font-size:18px;
  font-weight:800
  `,
};

const pages = {
  homePage: "14px",
  detailsPage: "16px",
};

const Text = styled.span`
  font-size: ${(props) => pages[props.theme.page]};
  text-transform: capitalize;
  color: ${(props) =>
    props.theme.dark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  font-weight: 300;

  ${(props) => variants[props.variant]}
 
`;

export { Text };
