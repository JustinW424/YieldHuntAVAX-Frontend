import styled from 'styled-components';
import { Typography } from '../../../components/Typography';

import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import hunter from '../../../assets/images/Loading.gif';
import background from '../../../assets/images/frames/lan-welcome.svg';
import background_mobile from '../../../assets/images/frames/welcome-mobile.png';
import background_ipad from '../../../assets/images/frames/welcome-ipad.png';

const StakingSection = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <BalanceContainer xs={24} md={8}>
            <Typography className="shadow responsiveTitle" m="30px 0 20px">
              Malicious eyes are watching.
            </Typography>
            <Typography className="shadow responsiveTitle" m="30px 0 20px">
              Adventurers need to be careful
            </Typography>
          </BalanceContainer>
          <Col xs={24} md={8}>
            <LargeText className="shadow primary center" m="0 0 5px" $size="36px">
              Welcome!
            </LargeText>
            <HunterImg src={hunter} alt="hunter" />
            <Typography className="mediumText" m="10px 0 0"></Typography>
          </Col>
          <UnStakedContainer xs={24} md={8}>
            {/* <Typography className="shadow responsiveTitle" m="30px 0 20px">
              Recruit unique Adventurers and Hunters to the fight.
            </Typography> */}
            <Typography className="shadow responsiveTitle" m="30px 0 20px">
            Earn $GEM as your adventurer seek!
            </Typography>
          </UnStakedContainer>
        </Row>
        <Typography className="primary shadow center responsiveTitle" m="20px auto">
          Use $GEM to recruit more Adventurers
        </Typography>
        <Link to="/game">
          <BeginButton type="primary">LETS BEGIN!</BeginButton>
        </Link>
      </Container>
    </Wrapper>
  );
};

const BeginButton = styled(Button)`
  width: 250px;
  display: block;
  margin: 20px auto;
  @media (max-width: 400px) {
    width: auto;
    font-size: 11px;
  }
`;

const HunterImg = styled.img`
  margin-top: 25px;
  max-width: 160px;
`;

const Container = styled.div`
  background: url(${background}) no-repeat center;
  min-height: 230px;
  background-size:100% 100%;
  // border: 4px solid #e5e5e5;
  padding: 100px;
  .ant-col {
    text-align: center;
  }
  @media (max-width: 1200px) {
    background: url(${background_ipad}) no-repeat center;
    min-height: 230px;
    padding: 85px;
    background-size: 100% 100%;
    background-position: top;
    .responsiveTitle {
      font-size: 12px;
    }
  }
  @media (max-width: 820px) {
    background: url(${background_ipad}) no-repeat center;
    min-height: 230px;
    padding: 60px;
    background-size: 100% 100%;
    background-position: top;
    .responsiveTitle {
      font-size: 12px;
    }
  }
  @media (max-width: 767px) {
    background: url(${background_mobile}) no-repeat center;
    min-height: 230px;
    padding: 20px;
    background-size: 100% 100%;
    background-position: top;
    .responsiveTitle {
      font-size: 12px;
    }
  }
`;

const Wrapper = styled.div`
  // border: 4px solid #e5e5e5;
  padding: 12px;
  // width: 90%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LargeText = styled(Typography)`
  font-size: 36px;
  line-height: 24px;
  @media (max-width: 1420px) {
    font-size: 28px;
  }
  @media (max-width: 900px) {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    text-align: center !important;
    font-size: 20px;
  }
`;

const BalanceContainer = styled(Col)`
  text-align: left !important;
  @media (max-width: 768px) {
    text-align: center !important;
    margin-bottom: 20px;
  }
`;

const UnStakedContainer = styled(Col)`
  text-align: left !important;
  padding-left: 30px;
  @media (max-width: 768px) {
    text-align: center !important;
    margin-bottom: 20px;
  }
`;

export default StakingSection;
