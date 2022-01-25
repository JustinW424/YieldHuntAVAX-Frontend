import { useState } from 'react';
import styled from 'styled-components';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

import { Button, message } from 'antd';
import { Typography, Text } from '../../../components/Typography';
// import chemy from '../../../assets/images/chemy.png';
import background from '../../../assets/images/frames/MediumForm1.svg';
import background_mobile from '../../../assets/images/frames/medium-mobile.png';

const MintingSection = ({
  minted,
  handleMint,
  maxToken,
  buttonDisabled,
  isGamePaused,
  hasMintPending,
  handleClaimMint,
  canMint,
}: any) => {
  const percentage = (minted / 50000) * 100;
  const [amount, setAmount] = useState(1);
  const [mintCost, setMintcost] = useState(1.5);

  const decrease = () => {
    if (amount === 1) {
      return;
    }
    setAmount(amount - 1);
    setMintcost(1.5*(amount - 1));
  };
  const increase = () => {
    if (amount === 10) {
      return;
    }
    console.log(minted, maxToken);
    if (!(minted + amount < maxToken)) {
      message.error('All tokens on-sale already sold');
      return;
    }
    setAmount(amount + 1);
    setMintcost(1.5*(amount + 1));
  };

  return (
    <Wrapper>
      <Container>
        <LargeText className="shadow underline center">MINT</LargeText>
        <Typography className="primary center shadow" $size="10px" m="10px 0">
          {hasMintPending
            ? 'You will need to wait 5 minutes or more to claim mint'
            : 'Your valuable gemstones may now be spent into new adventurers recruitment'}
        </Typography>
        <Typography className="secondary center shadow">{minted}/50000 Minted</Typography>
        {/* <AdventurerImg src={chemy} alt="hunter" /> */}
        <Percentage percentage={percentage}>
          <First>GEN-0</First>
          <Second>20K $GEM </Second>
          <Third>40K $GEM </Third>
          <Fourth>80K $GEM </Fourth>
        </Percentage>
        <NumberInput>
          <MinusCircleOutlined onClick={decrease} />
          <Typography className="primary shadow">{amount}</Typography>
          <PlusCircleOutlined onClick={increase} />
        </NumberInput>
        <MintRow>
          <MintButtonContainer>
            {hasMintPending ? (
              <MintButton
                type="primary"
                onClick={() => {
                  // if (minted < paidTokens) message.error('Not enough minted');
                  // else

                  if (buttonDisabled) message.error('Fetching data');
                  else if (isGamePaused) message.error('Game is paused');
                  else if (!canMint) message.error('Your mint is not ready');
                  else handleClaimMint();
                }}
              >
                CLAIM MINT
              </MintButton>
            ) : (
              <>
                {' '}
                <MintButton
                  type="primary"
                  // disabled={minted < paidTokens || buttonDisabled || isGamePaused}
                  onClick={() => {
                    // if (minted < paidTokens) message.error('Not enough minted');
                    // else
                    if (buttonDisabled) message.error('Fetching data');
                    else if (isGamePaused) message.error('Game is paused');
                    else handleMint(amount, false);
                  }}
                >
                  MINT NOW!
                </MintButton>
              </>
            )}
          </MintButtonContainer>
        </MintRow>
        <div>
          <Typography className="primary shadow center" m="0 0 10px">
            WL Price : <Text>1.25 AVAX</Text>
            <br/>
            Price : <Text>{mintCost} AVAX</Text>
          </Typography>
        </div>
        <Description className="center shadow">Non-Gen 0 Characters can only be minted with $GEM</Description>
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  .ant-col {
    text-align: center;
  }
`;

const MintRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 20px;
  @media (max-width: 480px) {
    display: block;
    text-align: center;
  }
`;

const Wrapper = styled.div`
  // border: 4px solid #e5e5e5;
  background: url(${background}) no-repeat center;
  background-size: 100% 100%;
  // border: 4px solid #e5e5e5;
  padding: 80px 95px 70px 95px;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    text-align: center;
  }
  position: relative;
  &.ant-col-md-12 {
    flex: 0 0 49%;
  }
  @media (max-width: 850px) {
    background: url(${background_mobile}) no-repeat center;
    background-size: 100% 100%;
    padding: 80px 60px 70px 60px;
    &.ant-col-md-12 {
      flex: 0 0 100%;
    }
  }
  @media (max-width: 768px) {
    background: url(${background}) no-repeat center;
    background-size: 100% 100%;
    padding: 80px 95px 70px 95px;
    &.ant-col-md-12 {
      flex: 0 0 100%;
    }
  }
  @media (max-width: 620px) {
    background: url(${background_mobile}) no-repeat center;
    background-size: 100% 100%;
    padding: 80px 60px 70px 60px;
    &.ant-col-md-12 {
      flex: 0 0 100%;
    }
  }
`;

const LargeText = styled(Typography)`
  font-size: 24px;
  line-height: 24px;
  margin: 0 0 20px;
`;

// const AdventurerImg = styled.img`
//   position: absolute;
//   top: -30px;
//   left: -20px;
//   @media (max-width: 800px) {
//     position: static;
//   }
// `;


const Percentage = styled.div<{ percentage: number }>`
  border: 4px solid white;
  width: 100%;
  height: 40px;
  margin: 10px 0;
  display: flex;
  position: relative;
  z-index: 1;
  &:after {
    content: '';
    position: absolute;
    background: #6f1d1bc7;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    top: 0;
    bottom: 0;
    left: 0;
    width: ${(p: any) => p.percentage}%;
  }
`;

const First = styled.div`
  width: 40%;
  border-right: 4px solid white;
  height: 32px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  text-align: center;
  &.active {
    background: #6f1d1bc7;
  }
  @media (max-width: 768px) {
    font-size: 9px;
  }
`;
const Second = styled.div`
  width: 20%;
  border-right: 4px solid white;
  height: 32px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  text-align: center;
  &.active {
    background: #6f1d1bc7;
  }
  @media (max-width: 768px) {
    font-size: 9px;
  }
`;
const Third = styled.div`
  width: 20%;
  border-right: 4px solid white;
  height: 32px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  text-align: center;
  &.active {
    background: #6f1d1bc7;
  }
  @media (max-width: 768px) {
    font-size: 9px;
  }
`;
const Fourth = styled.div`
  width: 20%;
  border-right: 4px solid white;
  height: 32px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  text-align: center;
  &.active {
    background: #6f1d1bc7;
  }
  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

const NumberInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .ant-typography {
    font-size: 28px;
    margin: 0 20px;
  }
  .anticon {
    font-size: 20px;
    user-select: none;
  }
`;

const MintButton = styled(Button)`
  width: 240px;
  display: block;
  margin-left: 20px;

  @media (max-width: 1280px) {
    width: auto;
    font-size: 10px;
  }
  @media (max-width: 1024px) {
    margin: 10px auto;
    width: auto;
    text-align: center;
  }

  @media (max-width: 450px) {
    width: auto;
    font-size: 10px;
  }
`;

const Description = styled(Typography)`
  color: #c4c4c4;
  font-size: 11px;
`;

const MintButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    display: block;
    text-align: center;
    margin-left: 20px;
  }
`;
export default MintingSection;
