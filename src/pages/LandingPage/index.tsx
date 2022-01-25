import { FC } from 'react';

import styled from 'styled-components';
import background from '../../assets/images/background.png';
import StakingSection from './components/StakingSection';
import MiddleTextSection from './components/MiddleTextSection';
import Adventurer from './components/Adventurer';
import Hunter from './components/Hunter';
import GEM from './components/GEM';
import Layout from '../../components/layout';

const LandingPage: FC = () => {
  return (
    <Layout>
      <Wrapper>
        <Container>
          {/* <MiddleTextSection /> */}
          <StakingSection />
          <StyledRow>
            <Adventurer />
            <Hunter />
            <GEM />
          </StyledRow>
        </Container>
      </Wrapper>
    </Layout>
  );
};

const Container = styled.div`
  padding: 50px 50px 0;
  max-width: 1500px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
const Wrapper = styled.div`
  /* background-image: url(${background});
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover; */
`;

const StyledRow = styled.div`
  display: grid;
  margin-bottom: 50px;
  margin-top: 50px;
  grid-template-columns: 32% 32% 32%;
  grid-column-gap: 1%;
  @media (max-width: 768px) {
    display: block;
  }
`;

export default LandingPage;
