import styled from "styled-components"
import { categories } from "./data"
import CategoryImg from "./CategoryImg"

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  `

  const Categories = () => {
    return (
      <Container>
        {categories.map((Img, t) => (
          <CategoryImg Img={Img.img} t={Img.title} key={Img.id} />
        ))}
      </Container>
    )
  }
  
  export default Categories