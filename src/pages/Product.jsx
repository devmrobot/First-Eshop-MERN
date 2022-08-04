import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import popcatSeven from "../assets/popcat-seven.jpg";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  gap: 5rem;
  ${mobile({ flexDirection: "column", padding: "20px", gap: "1rem" })}
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height: 70vh;
  width: 100%;
  object-fit: cover;
  ${mobile({ height: "50vh" })}
`;

const Title = styled.h1`
  font-size: 40px;
`;

const Description = styled.p`
  font-size: 20px;
  margin: 30px 0px;
`;

const Price = styled.span`
  font-size: 28px;
  font-weight: 600;
  color: #008080;
`;

const FilterContainer = styled.div`
  display: flex;
  margin: 40px 0px;
  justify-content: space-between;
  width: 50%;
  ${mobile({ flexDirection: "column", gap: "2rem", width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 22px;
  font-weight: 500;
  margin-right: 10px;
`;

const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  padding: 10px;
  font-size: 17px;
`;

const FilterSizeOption = styled.option`
  font-size: 20px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", gap: "2rem" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  gap: 1rem;
`;

const Amount = styled.span`
  font-size: 30px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid #008080;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  font-size: 20px;
  font-weight: 600;
  padding: 15px;
  color: #000;
  background-color: white;
  border: 2px solid #008080;
  cursor: pointer;

  &:hover {
    background-color: #008080;
    color: #fff;
  }
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={popcatSeven} />
        </ImgContainer>
        <InfoContainer>
          <Title>Super Nice Pot Plant</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
            sagittis ipsum, quis vehicula eros. Sed tempus molestie nisl, ut
            consequat diam placerat eget. Donec mattis, nisl non vehicula
            rhoncus, mauris nunc efficitur ex, posuere fermentum nisi sem quis
            mauris. Integer lobortis ut urna eu venenatis.
          </Description>
          <Price>$ 1000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#1F5F5B" />
              <FilterColor color="#06373A" />
              <FilterColor color="#062315" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>Small</FilterSizeOption>
                <FilterSizeOption>Medium</FilterSizeOption>
                <FilterSizeOption>Large</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{ color: "#008080", fontSize: "30px" }} />
              <Amount>1</Amount>
              <Add style={{ color: "#008080", fontSize: "30px" }} />
            </AmountContainer>
            <Button>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Title></Title>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
