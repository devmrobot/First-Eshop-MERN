import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  margin: 40px 0px;
  ${mobile({ padding: "10px", margin:"0px" })}
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 300;
  text-align: center;
  margin: 0;
  ${mobile({ margin : "0px 0px 40px 0px" })}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: "0px 20px 0px 20px" })}
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  margin: 40px 0px;
  ${mobile({ display: "none"})}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 20px;
  font-size: 20px;
  font-weight: 500;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin: 40px 0px;
  ${mobile({ flexDirection: "column", alignItem: "center", gap: "3rem" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", gap: "1rem" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({ flexDirection: "column", gap: "1rem" })}
`;

const Image = styled.img`
  width: 200px;
  height: 250px;
  ${mobile({ width: "100%" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ gap: "1rem" })}
`;

const ProductName = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-right: 10px;
`;

const ProductId = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-right: 10px;
`;

const ProductColor = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-right: 10px;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  font-size: 30px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid #008080;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #008080;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 40px 20px 40px 0px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 50px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "15px" })}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  font-size: 30px;
  font-weight: 600;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "28px"};
`;

const SummaryItemText = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-right: 10px;
`;

const SummaryItemPrice = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-right: 10px;
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

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/1367219/pexels-photo-1367219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove style={{ color: "#008080", fontSize: "30px" }} />
                  <ProductAmount>2</ProductAmount>
                  <Add style={{ color: "#008080", fontSize: "30px" }} />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/1239387/pexels-photo-1239387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove style={{ color: "#008080", fontSize: "30px" }} />
                  <ProductAmount>1</ProductAmount>
                  <Add style={{ color: "#008080", fontSize: "30px" }} />
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
