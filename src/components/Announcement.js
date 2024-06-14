import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  text-align: center;
  justify-content: center;
  display: flex;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return (
    <Container>Super Sale! Free Shipping on Orders over $100😍🛍️ </Container>
  );
};

export default Announcement;
