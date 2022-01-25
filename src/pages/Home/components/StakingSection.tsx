import styled from 'styled-components';
import { Typography, Text } from '../../../components/Typography';

import { Row, Col, Button, message } from 'antd';
import { useEffect, useState } from 'react';
import SpinIcon from '../../../components/SpinIcon';
import hunter from '../../../assets/images/AnimatedBg.gif';
import background from '../../../assets/images/frames/largeImage.png';
import background_mobile from '../../../assets/images/frames/welcome-mobile.png';

const StakingSection = ({
  balanceOfTokenUser,
  tokenHunters,
  tokenAdventurers,
  depositHunters,
  depositAdventurers,
  handleUnStake,
  handleStake,
  unclaimedGEM,
  buttonDisabled,
}: any) => {
  useEffect(() => {
    document.addEventListener('click', () => setOpenContextMenu(0));
  }, []);
  const decode = (tokenURI: string) => JSON.parse(atob(tokenURI))?.image;

  const [selectedStake, setSelectedStake] = useState<Number[]>([]);
  const [selectedUnStake, setSelectedUnStake] = useState<Number[]>([]);
  const [openContextMenu, setOpenContextMenu] = useState(0);
  const guardingToken = [...depositHunters, ...depositAdventurers].filter((item) => item.isGuarding).map((item) => item.id);
  const handleSelectStake = (tokenId: Number) => {
    if (selectedStake.includes(tokenId)) setSelectedStake(selectedStake.filter((item) => item !== tokenId));
    else setSelectedStake([...selectedStake, tokenId]);
  };

  const handleSelectUnStake = (tokenId: Number) => {
    if (selectedUnStake.includes(tokenId)) setSelectedUnStake(selectedUnStake.filter((item) => item !== tokenId));
    else setSelectedUnStake([...selectedUnStake, tokenId]);
  };

  const isSelectingGuardToken = guardingToken.some((item) => selectedUnStake.includes(item));
  return (
    <Wrapper>
      <Container>
        <Row>
          <BalanceContainer xs={24} lg={8}>
            <LargeText className="shadow underline center" m="25px 0 20px 0">
              UNSTAKED
            </LargeText>
            {buttonDisabled ? (
              <div>
                <SpinIcon />
              </div>
            ) : (
              <>
                <Typography className="primary  shadow">ADVENTURERS :</Typography>

                <TokenContainer>
                  {tokenAdventurers.map((item: any) => (
                    <TokenWrapper
                      key={item.id}
                      onClick={() => handleSelectStake(item.id)}
                      className={selectedStake.includes(item.id) ? 'selected' : ''}
                      onContextMenu={(event) => {
                        event.preventDefault();
                        setOpenContextMenu(item.id);
                      }}
                    >
                      {openContextMenu === item.id && (
                        <ContextContainer>
                          <a
                            href={`https://nftrade.com/assets/avalanche/0xa1b46ff2a3394b9460b4004f2e7401dec7f7a023/${item.id}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View on NFTtrade
                          </a>
                        </ContextContainer>
                      )}
                      <TokenImage src={decode(item.tokenURI)} alt="image" />
                    </TokenWrapper>
                  ))}
                </TokenContainer>
                <Typography className="primary  shadow" m="20px 0 0 0">
                  HUNTERS :
                </Typography>
                <TokenContainer>
                  {tokenHunters.map((item: any) => (
                    <TokenWrapper
                      key={item.id}
                      onClick={() => handleSelectStake(item.id)}
                      className={selectedStake.includes(item.id) ? 'selected' : ''}
                      onContextMenu={(event) => {
                        event.preventDefault();
                        setOpenContextMenu(item.id);
                      }}
                    >
                      {openContextMenu === item.id && (
                        <ContextContainer>
                          <a
                            href={`https://nftrade.com/assets/avalanche/0xa1b46ff2a3394b9460b4004f2e7401dec7f7a023/${item.id}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View on NFTTrade
                          </a>
                        </ContextContainer>
                      )}
                      <TokenImage src={decode(item.tokenURI)} alt="image" />
                    </TokenWrapper>
                  ))}
                </TokenContainer>
              </>
            )}

            <StakeButton
              type="primary"
              // disabled={!selectedStake.length || buttonDisabled}

              onClick={() => {
                if (!selectedStake.length) message.error('Please select your NFTs to Stake');
                else if (buttonDisabled) message.error('Fetching data');
                else handleStake(selectedStake, () => setSelectedStake([]));
              }}
            >
              STAKE
            </StakeButton>

            {/* <Typography className="primary shadow" m="20px 0 10px 0" $size="11px">
              Click NFT to Stake, UnStake */}
            {/* </Typography> */}
          </BalanceContainer>
          <Col xs={24} lg={8}>
            <LargeText className="shadow primary" m="0 0 5px">
              HAVE AN ADVENTURE
            </LargeText>
            <Typography className="primary shadow">(STAKE) TO EARN $GEM</Typography>
            <HunterImg src={hunter} alt="hunter" style={{ maxHeight: 250}}/>
            <Typography className="mediumText" m="10px 0 0">
              Balance : <Text className="primary mediumText"> {balanceOfTokenUser.toFixed(2)}$GEM</Text>
            </Typography>
          </Col>
          <UnStakedContainer xs={24} lg={8}>
            <LargeText className="shadow underline" m="20px 0 20px">
              STAKED
            </LargeText>
            {buttonDisabled ? (
              <SpinIcon />
            ) : (
              <>
                <Typography className="primary shadow center" m="20px 0 20px 0">
                  HAVE AN ADVENTURE :
                </Typography>
                <TokenContainer>
                  {[...depositHunters, ...depositAdventurers].map((item: any) => (
                    <TokenWrapper
                      key={item.id}
                      onClick={() => handleSelectUnStake(item.id)}
                      className={selectedUnStake.includes(item.id) ? 'selected' : ''}
                      onContextMenu={(event) => {
                        event.preventDefault();
                        setOpenContextMenu(item.id);
                      }}
                    >
                      {openContextMenu === item.id && (
                        <ContextContainer>
                          <a
                            href={`https://nftrade.com/assets/avalanche/0xa1b46ff2a3394b9460b4004f2e7401dec7f7a023/${item.id}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View on NFTTrade
                          </a>
                        </ContextContainer>
                      )}
                      <TokenImage src={decode(item.tokenURI)} alt="image" />
                      <TokenValue>{item?.owed?.toFixed(2)}</TokenValue>
                    </TokenWrapper>
                  ))}
                </TokenContainer>
              </>
            )}

            <Error style={{ visibility: isSelectingGuardToken ? 'visible' : 'hidden' }}>
              You can only unstake a Adventurer if it has at least 2 days worth of $GEM.
            </Error>
            <ClaimContainer>
              <>
                <ClaimButton
                  type="primary"
                  // disabled={!selectedUnStake.length || buttonDisabled}

                  onClick={() => {
                    if (!selectedUnStake.length) message.error('Please select your NFTs to claim rewards');
                    else if (buttonDisabled) message.error('Fetching data');
                    else handleUnStake(selectedUnStake, false, () => setSelectedUnStake([]));
                  }}
                >
                  CLAIM $GEM!
                </ClaimButton>
                <ClaimButton
                  type="primary"
                  // disabled={!selectedUnStake.length || isSelectingGuardToken || buttonDisabled}

                  onClick={() => {
                    if (!selectedUnStake.length) message.error('Please select your NFTs to claim rewards');
                    // else if (isSelectingGuardToken) message.error('You are selecting guarding token');
                    else if (buttonDisabled) message.error('Fetching data');
                    else handleUnStake(selectedUnStake, true, () => setSelectedUnStake([]));
                  }}
                >
                  <div> CLAIM $GEM </div>
                  <div style={{ marginTop: 10 }}> AND UNSTAKE!</div>
                </ClaimButton>
              </>

              <Typography className="center shadow" m="10px 0" $size="14px">
                UNCLAIMED :
                <Text className="primary block shadow" m="10px 0" $size="14px">
                  {unclaimedGEM.toFixed(2)} $GEM
                </Text>
              </Typography>
            </ClaimContainer>
          </UnStakedContainer>
        </Row>
        <Remind>
          <Col xs={24} lg={8}>
            <Typography className="center primary shadow" m="10px 0" $size="10px">
              Select your NFTs to Stake
              <br />
              Select your NFTs to claim rewards
            </Typography>
          </Col>
        </Remind>
      </Container>
    </Wrapper>
  );
};

const Remind = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 600px) {
    display: block;
  }
`;

const Error = styled(Typography)`
  color: #cecc52;
  font-size: 10px;
  margin-top: 30px;
`;

const TokenContainer = styled.div`
  display: inline-block;
  // max-height: 300px;
  height: 85px;
  overflow: auto;
  flex-wrap: wrap;
  margin-top: 10px;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #3f3f3f;
    height: 50px;
  }

  &::-webkit-scrollbar {
    width: 3px;
    background-color: #6f1d1b;
    height: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fcfbb7;
    border-radius: 10px;
    height: 50px;
  }
`;

const ClaimContainer = styled.div`
  margin-top: 0;
  @media (max-width: 480px) {
    .block {
      display: block;
    }
  }
`;

const ClaimButton = styled(Button)`
  width: 340px;
  margin: 0 auto 20px;
  height: auto;
  display: block;
  @media (max-width: 1280px) {
    width: auto;
    font-size: 10px;
  }
  @media (max-width: 450px) {
    width: 180px;
    font-size: 10px;
    padding-left: 5px;
    padding-right: 5px;
    margin: 10px auto;
  }
`;
const StakeButton = styled(Button)`
  width: 340px;
  margin: 20px 0;
  @media (max-width: 1280px) {
    width: auto;
    font-size: 10px;
  }
  @media (max-width: 450px) {
    width: auto;
    font-size: 10px;
  }
`;

const TokenWrapper = styled.div`
  border: 2px solid #e6e6e686;
  border-radius: 5px;
  display: inline-block;
  padding: 2px 4px;
  text-align: center;
  margin: 5px;
  cursor: pointer;
  width: 100px;
  position: relative;
  &.selected {
    border: 2px solid #cc302d;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;

const TokenImage = styled.img`
  width: 35px;
  height: 35px;
`;

const TokenValue = styled(Typography)`
  /* color: #ce2624e6; */
  font-size: 9px;
`;
const HunterImg = styled.img`
  margin-top: 35px;
  margin-bottom: 25px;
`;

const Container = styled.div`
  padding: 70px 80px;    
  .ant-col {
    text-align: center;
  }
  @media (max-width: 767px) {
    padding: 30px 15px;   
  }
`;

const Wrapper = styled.div`
  background: url(${background}) no-repeat center;
  min-height: 230px;
  background_mobile
  background-size: 100% 100%;
  background-position: top;
  padding: 15px 0 5px;
  padding: 12px;
  margin-bottom: 50px;
  @media (max-width: 850px) {
    background: url(${background_mobile}) no-repeat center;
    min-height: 230px;
    background-size: 100% 100%;
    background-position: top;
    padding: 15px 0 5px;
    padding: 12px;
    margin-bottom: 30px;
  }
`;

const LargeText = styled(Typography)`
  font-size: 24px;
  line-height: 24px;
  @media (max-width: 768px) {
    text-align: center !important;
    font-size: 20px;
  }
`;

const BalanceContainer = styled(Col)`
  /* text-align: left !important; */
  /* padding-left: 30px; */
  @media (max-width: 768px) {
    text-align: center !important;
    margin-bottom: 20px;
    padding-left: 0 !important;
  }
`;

const UnStakedContainer = styled(Col)`
  /* text-align: left !important; */
  /* padding-left: 30px; */
  @media (max-width: 768px) {
    text-align: center !important;
    margin-bottom: 20px;
    padding-left: 0 !important;
  }
`;

const ContextContainer = styled.div`
  background: #cfcfcf;
  position: absolute;
  font-size: 8px;
  font-weight: bold;
  left: 0;
  // height: 100%;
  width: 130px;
  padding: 5px 0;
  border-radius: 5px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  border: 2px solid #cfcfcf;
  box-shadow: rgb(0 0 0 / 25%) 0px 14px 28px, rgb(0 0 0 / 22%) 0px 10px 10px;
  img {
    width: 15px;
    margin-left: 7px;
  }
  a {
    display: flex;
    align-items: center;
  }
`;

export default StakingSection;
