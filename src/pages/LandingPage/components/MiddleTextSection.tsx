import styled from 'styled-components';
// import { Typography } from '../../../components/Typography';
// import sword from '../../../assets/images/Yield_Hunt_Title.png';
// import hunter from '../../../assets/images/hunter.png';

const MiddleTextSection = () => {
  return (
    <Container>
      {/* <img src={sword} alt="sword" className="sword" /> */}
      {/* <HunterImg src={hunter} alt="hunter" /> */}
      {/* <Typography className="primary shadow title">YIELD HUNT</Typography> */}
    </Container>
  );
};

// const HunterImg = styled.img`
//   position: absolute;
//   left: 0;
//   max-width: 195px;
//   top: -80px;
//   left: 250px;
//   @media (max-width: 1366px) {
//     top: -68px;
//     max-width:160px;
//     left: 280px;
//   }
//   @media (max-width: 1266px) {
//     top: -60px;
//     max-width:140px;
//     left: 270px;
//   }
//   @media (max-width: 1200px) {
//     left: 230px;
//   }
//   @media (max-width: 1024px) {
//     width: 120px;
//     top: -55px;
//     left:190px;
//   }
//   @media (max-width: 990px) {
//     left: 160px;
//   }
//   @media (max-width: 915px) {
//     left: 130px;
//   }
//   @media (max-width: 850px) {
//     left: 100px;
//   }
//   @media (max-width: 768px) {
//     left: 70px;
//   }
//   @media (max-width: 600px) {
//     display:none;
//   }
// `;
const Container = styled.div`
  text-align: center;
  position: relative;
  margin: 100px 0 50px;
  @media (max-width: 640px) {
    margin-top: 130px;
  }
  .title {
    font-size: 43px;
    position: relative;
    z-index: 2;
    text-shadow: -4px 4px 4px rgba(0, 0, 0, 0.75);
    @media (max-width: 1368px) {
      font-size: 36px;
    }
    @media (max-width: 1280px) {
      font-size: 30px;
    }
    @media (max-width: 1100px) {
      font-size: 26px;
    }

    @media (max-width: 768px) {
      text-align: center !important;
      font-size: 22px;
    }
  }
  .sword {
    position: absolute;
    top: -88px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
  }
`;

export default MiddleTextSection;
