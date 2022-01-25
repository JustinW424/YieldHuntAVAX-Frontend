import styled from 'styled-components';
import { Typography, Text } from '../../../components/Typography';
// import fire from '../../../assets/images/fire.svg';
import background from '../../../assets/images/frames/MediumForm1.svg';
import background_mobile from '../../../assets/images/frames/medium-mobile.png';

import { Row, Col } from 'antd';
import React, { useState } from 'react';
const GameDataSection = ({
  stats,
  numHuntersStolen,
  numAdventurersStolen,
  numHunters,
  numAdventurers,
  totalGEMEarned,
  totalStakePercent,
  leaderboardData,
  currentGEMAmount,
  totalGPBurned,
}: any) => {
  const [tab, setTab] = useState(0);
  // const percentage = (totalGEMEarned / 6000000000) * 100;
  return (
    <Wrapper>
      <Container>
        <LargeText className="shadow underline center">
          GAME DATA
        </LargeText>
        <Row>
          <Col xs={24} md={12}>
            <div onClick={() => setTab(0)}>
              <GameTab className={tab === 0 ? 'primary  title' : ' shadow  title'} m="10px 0 0 0">
                Game Status
              </GameTab>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div onClick={() => setTab(1)}>
              <Tab className={tab === 1 ? 'primary title' : ' shadow title'} m="10px 0 0 0">
                Leaderboard
              </Tab>
            </div>
          </Col>
        </Row>
        <DataRow>
          <Col xs={24} md={12}>
            {tab === 0 && (
              <>
                <Typography m="20px 0 0 0" $size="12px">
                  Adventurers Minted<br/>
                  <Text className="primary " $size="12px">
                    {numAdventurers}
                  </Text>
                </Typography>
                <Typography m="20px 0 0 0" $size="12px">
                  Adventurers Staked<br/>
                  <Text className="primary" $size="12px">
                    {stats?.numAdventurersStaked}
                  </Text>
                </Typography>
                <Typography m="20px 0 0 0" $size="12px">
                  Hunters Minted<br/>
                  <Text className="primary" $size="12px">
                    {numHunters}
                  </Text>
                </Typography>
                <Typography m="20px 0 0 0" $size="12px">
                  Hunters Staked<br/>
                  <Text className="primary" $size="12px">
                    {stats?.numHuntersStaked}
                  </Text>
                </Typography>
                {/* <Typography m="20px 0 0 0" className="underline shadow">
                  Total % Staked
                </Typography>
                <PercentText m="10px 0 0 0" className="underline">
                  {totalStakePercent.toFixed(2)}%
                </PercentText> */}
              </>
            )}
          </Col>
          <Col xs={24} md={12}>
            {tab === 0 && (
              <>
                <Typography m="20px 0 0 0" $size="12px">
                  Adventurers Stolen<br/>
                  <Text className="primary" $size="12px">
                    {numAdventurersStolen}
                  </Text>
                </Typography>
                <Typography m="20px 0 0 0" $size="12px">
                  Hunters Stolen<br/>
                  <Text className="primary" $size="12px">
                    {numHuntersStolen}
                  </Text>
                </Typography>
                <Typography m="20px 0 0 0" $size="12px">
                  $GEM CLAIMED<br/>
                </Typography>
                <Typography className="primary" m="5px 0 0 0" $size="12px">
                  {(currentGEMAmount + totalGPBurned).toFixed(2)}
                </Typography>

                <Typography m="20px 0 0 0" $size="12px">
                  $GEM BURNED<br/>
                </Typography>
                <Typography className="primary" m="5px 0 0 0" $size="12px">
                  {totalGPBurned ? totalGPBurned.toFixed(2) : 0}
                </Typography>
              </>
            )}
          </Col>

          {tab === 1 && (
            <>
              {leaderboardData &&
                leaderboardData.map((item: any, index: any) => {
                  return (
                    <React.Fragment key={index}>
                      <LeaderBoardContainer xs={12}>
                        <Typography $size="12px">
                          {index + 1}.{item?.address.slice(0, 6)}...{item?.address.slice(38, 42)}
                        </Typography>
                      </LeaderBoardContainer>
                      <LeaderBoardContainer xs={12}>
                        <Typography $size="12px">{item.value.toFixed(2)} $GEM </Typography>
                      </LeaderBoardContainer>
                    </React.Fragment>
                  );
                })}
            </>
          )}
        </DataRow>
        {/* <DataRow>
          {' '}
          <Col xs={24}>
            <Percentage percentage={percentage}>
              <Typography $size="12px">
                $GEM EMISSION :{' '}
                <Text className="primary" $size="12px">
                  {' '}
                  %{!isNaN(percentage) ? percentage.toFixed(2) : '0.00'}
                </Text>
              </Typography>
            </Percentage>
          </Col>
        </DataRow> */}
      </Container>
    </Wrapper>
  );
};

// const Percentage = styled.div<{ percentage: number }>`
//   max-width: 382px;
//   height: 40px;
//   border: 4px solid white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: 30px;
//   position: relative;
//   z-index: 1;
//   .ant-typography {
//     position: relative;
//     z-index: 2;
//   }
//   &:after {
//     content: '';
//     position: absolute;
//     background: #6f1d1bc7;
//     border-top-left-radius: 0;
//     border-bottom-left-radius: 0;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     width: ${(p: any) => p.percentage}%;
//   }
// `;

const DataRow = styled(Row)`
  row-gap: 0px;
  max-height: 240px;
  overflow: auto;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #3f3f3f;
    height: 50px;
  }

  &::-webkit-scrollbar {
    width: 3px;
    background-color: #6f1d1b;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fcfbb7;
    border-radius: 10px;
    height: 50px;
  }
  @media (max-width: 1024px) {
    max-height: 400px;
  }
`;

const LeaderBoardContainer = styled(Col)`
  margin-top: 15px;
  @media (max-width: 450px) {
    .ant-typography {
      font-size: 8px;
    }
  }
`;

const Tab = styled(Typography)`
  cursor: pointer;
  border: 2px solid #cfcfcf;
  padding: 10px;
`;

const GameTab = styled(Typography)`
  cursor: pointer;
  border: 2px solid #cfcfcf;
  padding: 10px;
  border-right: none;
  @media (max-width: 768px) {
    border-right: 2px solid #cfcfcf;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  .ant-col {
    text-align: center;
    .ant-typography {
      &.title {
        font-size: 14px;
      }
    }
  }
`;

const Wrapper = styled.div`
  background: url(${background}) no-repeat center;
  background-size: 100% 100%;
  padding: 80px 95px 70px 95px;
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
//   top: 15px;
//   @media (max-width: 768px) {
//     position: static;
//     display: block;
//     margin: 30px auto 20px;
//   }
// `;

// const PercentText = styled(Typography)`
//   color: #3ee6f1;
// `;

export default GameDataSection;
