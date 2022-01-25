import styled from 'styled-components';
import { Typography } from '../../../components/Typography';
import hunter from '../../../assets/images/hunter.png';
import background from '../../../assets/images/frames/lan-small.svg';

const Hunters = () => {
  return (
    <Wrapper>
      <Container>
        <LargeText className="shadow underline center primary">Hunter</LargeText>
        <HunterImg src={hunter} alt="hunter" />
        <Description className="center shadow">Hunters steal new mints & earn $GEM from adventurers</Description>
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  background: url(${background}) no-repeat center;
  // border: 4px solid #e5e5e5;
  padding: 40px 45px;
  background-size:100% 100%;
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
  padding: 20px 12px 12px 12px;
  position: relative;
  width: 100%;
`;

const LargeText = styled(Typography)`
  font-size: 24px;
  line-height: 24px;
  margin: 10px 0 10px;
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

const HunterImg = styled.img`
  margin: 0 auto;
  max-width:25%;
`;
const Description = styled(Typography)`
  font-size: 11px;
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

export default Hunters;
