import React, { useState } from "react";
import styled from "styled-components";
import Loading from "../../assets/images/Loading.gif";
import enterForest from "../../assets/images/button1.svg";
import enterForestMo from "../../assets/images/button_hover.svg";

const MiddleTextSection = () => {
  const [enterButton, setImage] = useState(enterForest);
  return (
    <Container>
      <Wrap>
        <HunterImg src={Loading} alt="hunter" />
        <br />
        <a
          href="/home"
          onMouseEnter={() => setImage(enterForestMo)}
          onMouseLeave={() => setImage(enterForest)}
        >
          <ButtonImg src={enterButton} alt="twitter" />
        </a>
      </Wrap>
      {/* <img src={sword} alt="sword" className="sword" /> */}
    </Container>
  );
};
const ButtonImg = styled.img`
  @media (max-width: 768px) {
    max-width: 200px;
  }
`;
const HunterImg = styled.img`
  @media (max-width: 768px) {
    max-width: 200px;
  }
`;

const Container = styled.div`
  text-align: center;
  position: relative;
  width: 100%;
  height: 100vh;
`;
const Wrap = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default MiddleTextSection;
