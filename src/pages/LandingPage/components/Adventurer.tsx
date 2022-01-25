import styled from 'styled-components';
import { Typography } from '../../../components/Typography';
import adventurer from '../../../assets/images/adventurer1.svg';
import background from '../../../assets/images/frames/lan-small.svg';

const Adventurer = () => {
  return (
    <Wrapper>
      <Container>
        <LargeText className="shadow underline center primary">Adventurer</LargeText>
        <AdvImg src={adventurer} alt="adventurer" />
        <Description className="center shadow">Start Searching and earn $GEM</Description>
      </Container>
    </Wrapper>
  );
};

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
  // border: 4px solid #e5e5e5;
  padding: 12px;
  position: relative;
  width: 100%;
  height: 100%;
`;

const LargeText = styled(Typography)`
  font-size: 20px;
  line-height: 24px;
  margin: 17px 0 10px;
  @media (max-width: 1200px) {
    font-size:16px;
  }
  @media (max-width: 820px) {
    font-size:10px;
  }
  @media (max-width: 768px) {
    font-size:14px;
    margin-top: 20px;
  }
`;

const AdvImg = styled.img`
  margin: 12px auto;
  max-width: 17%;
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

export default Adventurer;
