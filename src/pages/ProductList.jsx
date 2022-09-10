import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement.jsx";
import Navbar from "../components/Navbar.jsx";
import Products from "../components/Products.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer.jsx";
import { mobile } from "../responsive.js";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  ${mobile({ flexDirection: "column", padding: "0px 0px 40px 0px" })}
`;

const Title = styled.h1`
  padding: 25px;
  margin: 0;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
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
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  console.log("--> Location", location);
  console.log("--> cat", cat);
  console.log("--> location", location);
  console.log("--> sort", sort);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters} defaultValue={"default"}>
            <Option value={"default"} disabled>Type</Option>
            <Option>Interior</Option>
            <Option>Exterior</Option>
          </Select>
          <Select name="size" onChange={handleFilters} defaultValue={"default"}>
            <Option value={"default"} disabled>Size</Option>
            <Option>Small</Option>
            <Option>Medium</Option>
            <Option>Large</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={handleSort}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
