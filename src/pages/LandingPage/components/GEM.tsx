import styled from 'styled-components';
import { Typography } from '../../../components/Typography';
import background from '../../../assets/images/frames/lan-small.svg';
import gemPng from '../../../assets/images/GemShine.svg';

const GP = () => {
  return (
    <Wrapper>
      <Container>
        <LargeText className="shadow underline center primary" m="10px 0 20px">
          $GEM
        </LargeText>
        <AdvImg src={gemPng} alt="adventurer" />
        <Description className="center shadow" m="0 0 20px" $size="15px">
          GEM is the ONLY way to mint new guards for you
        </Description>
      </Container>
    </Wrapper>
  );
};

const AdvImg = styled.img`
  margin: 30px auto;
  max-width: 13%;
`;

const Container = styled.div`
  background: url(${background}) no-repeat center;
  // border: 4px solid #e5e5e5;
  padding: 40px 45px;
  background-size:100% 100%;
  width: 100%;
  height: 100%;
  text-align: center;
  @media (max-width: 768px) {
    text-align: center;
  }
  .ant-col {
    text-align: center;
  }
`;

const Wrapper = styled.div`
  padding: 12px;
  position: relative;
  width: 100%;
  height: 100%;
`;

const LargeText = styled(Typography)`
  font-size: 24px;
  line-height: 24px;
  margin: 20px 0 10px;
  @media (max-width: 1200px) {
    font-size:16px;
  }
  @media (max-width: 820px) {
    font-size:10px;
  }
  @media (max-width: 768px) {
    font-size:14px;
    margin: 20px 0;
  }
`;

const Description = styled(Typography)`
  font-size: 10px;
  margin: 0 0 10px;
  @media (max-width: 1200px) {
    font-size:9px;
  }
  @media (max-width: 820px) {
    font-size:7px;
  }
  @media (max-width: 768px) {
    font-size:10px;
    margin: 10px 0;
  }
`;

export default GP;
