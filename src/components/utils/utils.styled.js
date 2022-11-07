import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
`;

const Wraper = styled(Flex)`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding:20px;
`;

export { Flex, Wraper };
