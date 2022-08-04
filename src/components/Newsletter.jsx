import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 40vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;

const Title = styled.h2`
  font-size: 70px;
  margin-bottom: 20px;
  margin-top: 0;
  ${mobile({ fontSize : "40px" })}
`;

const Description = styled.div`
  font-size: 40px;
  margin-bottom: 30px;
  ${mobile({ fontSize : "30px", textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding: 10px 25px;
  font-size: 23px;
  border: 1px solid lightgray;
  ${mobile({ fontSize : "17px"})}
`;

const Button = styled.button`
  flex: 1;
  cursor: pointer;
  background-color: #008080;
  border: none;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products</Description>
      <InputContainer>
        <Input placeholder="...Enter your email" />
        <Button>
          <SendIcon style={{ fontSize: 35, color: "#fff" }} />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
