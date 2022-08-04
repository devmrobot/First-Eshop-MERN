import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement.jsx";
import Navbar from "../components/Navbar.jsx";
import Products from "../components/Products.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer.jsx";
import { mobile } from "../responsive.js";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  ${mobile({ flexDirection: "column", padding:"0px 0px 40px 0px" })}
`;

const Title = styled.h1`
  padding: 25px;
  margin: 0;
`;

const Filter = styled.div`
  display: flex;
  align-items:center;
  gap: 1rem;
  ${mobile({ flexDirection: "column" })}
`;

const FilterText = styled.h3`
  font-size: 28px;
  margin: 15px 0;
  color: #008080;
  display: flex;
  ${mobile({ margin: "20px 0px 0px 0px" })}
`;

const Select = styled.select`
  width: 200px;
  height: 40px;
  font-size: 17px;
  display: flex;
  ${mobile({ width: "80%" })}
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>PLANTS</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Type
            </Option>
            <Option>Interior</Option>
            <Option>Exterior</Option>
            <Option>Plant for Home</Option>
            <Option>Plant for Office</Option>
            <Option>Succulent</Option>
            <Option>Cactus</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>Small plant</Option>
            <Option>Medium plant</Option>
            <Option>Large plant</Option>
            <Option>Extra-large plant</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
