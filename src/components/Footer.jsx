import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { useFullLinks } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  padding: 20px;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
`;

const Logo = styled.h2`
  font-size: 35px;
`;

const Description = styled.div`
  font-size: 17px;
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialIcon = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 50%;
  gap: 1rem;
  width: 50px;
  height: 50px;
  background-color: #${(props) => props.color};
`;

const Center = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  flex: 1;
  font-size: 35px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  font-size: 23px;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 20px;
`;

const Payment = styled.img`
  width: 300px;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Title>WELCOME TO THE JUNGLE</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
          sagittis ipsum, quis vehicula eros. Sed tempus molestie nisl, ut
          consequat diam placerat eget. Donec mattis, nisl non vehicula rhoncus,
          mauris nunc efficitur ex, posuere fermentum nisi sem quis mauris.
          Integer lobortis ut urna eu venenatis.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>USEFULL LINKS</Title>
        <List>
          <ListItem>Home</ListItem>
          {useFullLinks.map((item) => (
            <ListItem key={item.id}>{item.desc}</ListItem>
          ))}
        </List>
      </Center>
      <Right>
        <Title>CONTACT</Title>
        <ContactItem>
          <Room />5 rue des fleurs - 75001 PARIS
        </ContactItem>
        <ContactItem>
          <Phone />
          +33 01 43 56 78 56
        </ContactItem>
        <ContactItem>
          <MailOutline />
          contact@thejungle.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
