import { FC, useState, useEffect } from "react";

import { notification, Spin, Typography } from "antd";
import { useWallet } from "../../hooks/useWallet";
import styled from "styled-components";
import background from "../../assets/images/background.png";
import StakingSection from "./components/StakingSection";
import MiddleTextSection from "./components/MiddleTextSection";
import MintingSection from "./components/MintingSection";
import GameDataSection from "./components/GameDataSection";
import Layout from "../../components/layout";
import {
  getContractBarn,
  getContractHunter,
  getContractGem,
  // getContractTrait
} from "../../utils/getContract";
import WhatHappenModal from "../../components/WhatHappenModal/WhatHappenModal";
import { SyncOutlined } from "@ant-design/icons";
// import data0to13732960 from '../../utils/0to13732960.json';
// import data13723961to13737065 from '../../utils/13723961to13737065.json';
// import axios from 'axios';
import { getAddresses } from "../../utils/constants";
import { DEFAULT_NETWORK } from "../../utils/blockchain";
import confirmBg from "../../assets/images/frames/fetching.svg";

const loadingIcon = <SyncOutlined style={{ fontSize: 50 }} spin />;
const HomePage: FC = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen: any = () => setOpen(!open);
  const [loading, setLoading] = useState("");
  const [whatHappen, setWhatHappen] = useState([] as any);
  const [confirming, setConfirming] = useState("");

  const [data, setData] = useState({
    minted: 0,
    paidTokens: 0,
    maxTokens: 0,
    stats: {},
    numAdventurersStolen: 0,
    numHuntersStolen: 0,
    numHunters: 0,
    numAdventurers: 0,
    totalGEMEarned: 0,
    totalStakePercent: 0,
    mintCost: 0,
    balanceOfTokenUser: 0,
    tokenHunters: [] as any,
    tokenAdventurers: [] as any,
    depositAdventurers: [] as any,
    depositHunters: [] as any,
    DAILY_GEM_RATE: 0,
    blockTimestamp: 0,
    MAXIMUM_GLOBAL_GEM: 0,
    leaderboardData: [] as any,
    unclaimedGEM: 0,
    numAdventurersBurned: 0,
    numHuntersBurned: 0,
    isGamePaused: false,
    currentGEMAmount: 0,
    hasMintPending: false,
    canMint: false,
    totalGPBurned: 0,
  });

  const addresses = getAddresses(DEFAULT_NETWORK);

  const { active, account, connector, library } = useWallet();
  function delay(time: number): Promise<void> {
    return new Promise<void>((resolve) => setTimeout(resolve, time * 1000));
  }

  async function tryNTimes(toTry: any, times = 10, interval = 5) {
    if (times < 1)
      throw new Error(
        `Bad argument: 'times' must be greater than 0, but ${times} was received.`
      );
    let attemptCount = 0;
    while (true) {
      try {
        const result = await toTry();
        setConfirming("");
        return result;
      } catch (error) {
        if (++attemptCount >= times) throw error;
      }
      await delay(interval);
    }
  }

  const handleError = (err: any) => {
    if (err?.message.includes("execution reverted")) {
      if (err?.message.includes("guarding")) {
        notification.error({
          message: "",
          description:
            "Execution reverted: Adventurer needs to be staked for 2 days",
        });

        return;
      }
      notification.error({
        message: "",
        description:
          err.message.substr(0, err.message.indexOf("{")) || err.message,
      });
    } else {
      notification.error({
        message: "",
        description: err.message,
      });
    }
  };

  const getBlockchainData = async (
    text?: string,
    isShowWhatHappen?: any,
    isFirstLoad?: boolean
  ) => {
    if (connector && library) {
      try {
        isFirstLoad && setLoading("Fetching data...");
        const { contract: GemContract } = await getContractGem(connector);
        const { contract: HunterContract } = await getContractHunter(connector);
        const { contract: BarnContract } = await getContractBarn(connector);
        // const { contract: TraitContract } = await getContractTrait(connector);
        // GET NUM HUNTER, Adnveturer ======================================================================
        let numHuntersStolen = 0;
        let numAdventurersStolen = 0;
        let numHuntersBurned = 0;
        let numAdventurersBurned = 0;
        let numHunters = 0;
        let numAdventurers = 0;
        const minted = +(await HunterContract.methods.totalSupply().call());
        const balanceOfStaking = +(await HunterContract.methods
          .balanceOf(addresses.BARN_ADDRESS)
          .call());
        let stats = {
          numHuntersStaked: 0,
          numAdventurersStaked: 0,
        };
        let totalGPBurned = 0;
        // GET NUM HUNTER, ADVENTURER END ======================================================================

        // GET LEADERBOARD DATA ======================================================================
        let leaderboardData = [] as any;
        // GET LEADERBOARD DATA END ======================================================================

        const balanceOfOwner = +(await HunterContract.methods
          .balanceOf(account)
          .call());
        const maxTokens = +(await HunterContract.methods.MAX_TOKENS().call());
        const paidTokens = +(await HunterContract.methods
          .getPaidTokens()
          .call());
        const isGamePaused = await HunterContract.methods.paused().call();
        // const hasMintPending = await HunterContract.methods.hasMintPending(account).call();
        // const canMint = await HunterContract.methods.canMint(account).call();
        const hasMintPending = false;
        const canMint = true;

        const totalGEMEarned = await BarnContract.methods
          .totalGemEarned()
          .call();
        const totalStakePercent = (balanceOfStaking / minted) * 100;
        const mintCost = await HunterContract.methods.mintCost(minted).call();
        const balanceOfTokenUser = await GemContract.methods
          .balanceOf(account)
          .call();
        var blockNumber = await library?.eth?.getBlockNumber();
        var block: any = await library?.eth?.getBlock(blockNumber || 0);
        const blockTimestamp = block.timestamp * 1000;
        const DAILY_GEM_RATE = await BarnContract.methods
          .DAILY_GEM_RATE()
          .call();
        const DAILY_GEM_RATE_CONVERT = +(
          library?.utils.fromWei(DAILY_GEM_RATE || 0, "ether") || 0
        );
        const MAXIMUM_GLOBAL_GEM = await BarnContract.methods
          .MAXIMUM_GLOBAL_GEM()
          .call();
        const MAXIMUM_GLOBAL_GEM_CONVERT = +(
          library?.utils.fromWei(MAXIMUM_GLOBAL_GEM || 0, "ether") || 0
        );
        const MINIMUM_TO_EXIT = +(await BarnContract.methods
          .MINIMUM_TO_EXIT()
          .call());
        let tokensOfOwner = [];
        tokensOfOwner = await Promise.all(
          Array.from(Array(balanceOfOwner).keys()).map(
            async (item: any): Promise<any> => {
              const token = await HunterContract.methods
                .tokenOfOwnerByIndex(account, item)
                .call();
              const tokenTraits = await HunterContract.methods
                .getTokenTraits(token)
                .call();
              const tokenURI = await HunterContract.methods
                .tokenURI(token)
                .call();
              return {
                id: token,
                tokenTraits,
                tokenURI: tokenURI.slice(29, tokenURI.length),
              };
            }
          )
        );
        tokensOfOwner = tokensOfOwner.sort(
          (prev: any, curr: any) => +prev.id - +curr.id
        );
        const tokenAdventurers = tokensOfOwner.filter(
          (token) => token?.tokenTraits?.isAdventurer
        );
        const tokenHunters = tokensOfOwner.filter(
          (token) => !token?.tokenTraits?.isAdventurer
        );

        const ClaimedLogs = await HunterContract.getPastEvents("Transfer", {
          filter: { from: addresses.BARN_ADDRESS, to: account || "0x0" },
          fromBlock: 0,
          toBlock: "latest",
        });

        const TokenStakedLogsOwner = await BarnContract.getPastEvents(
          "TokenStaked",
          {
            filter: { owner: account || "0x0" },
            fromBlock: 0,
            toBlock: "latest",
          }
        );
        const accountLogs: any = [...TokenStakedLogsOwner, ...ClaimedLogs].sort(
          (a, b) =>
            a.blockNumber - b.blockNumber ||
            a.transactionIndex - b.transactionIndex
        );
        // const accountLogs: any = [...TokenStakedLogsOwner].sort(
        //   (a, b) => a.blockNumber - b.blockNumber || a.transactionIndex - b.transactionIndex
        // );
        const depositOfOwnerLogs: any = new Set();

        for (const log of accountLogs) {
          const { owner, tokenId, to } = log.returnValues;
          if (owner === account) {
            depositOfOwnerLogs.add(tokenId.toString());
          } else if (to === account) {
            depositOfOwnerLogs.delete(tokenId.toString());
          }
        }
        let depositOfOwner = [];
        depositOfOwner = await Promise.all(
          Array.from(depositOfOwnerLogs).map(
            async (item: any): Promise<any> => {
              const tokenTraits = await HunterContract.methods
                .getTokenTraits(item)
                .call();
              const tokenURI = await HunterContract.methods.tokenURI(item).call();
              const TokenStakedLogsFilter = await BarnContract.getPastEvents(
                "TokenStaked",
                {
                  filter: { tokenId: item },
                  fromBlock: 0,
                  toBlock: "latest",
                }
              );
              const lastItem =
                TokenStakedLogsFilter[TokenStakedLogsFilter.length - 1];
              let stakeInfo = {} as any;
              let isGuarding = false;
              if (tokenTraits.isAdventurer) {
                isGuarding =
                  blockTimestamp / 1000 - +lastItem?.returnValues?.value <
                  MINIMUM_TO_EXIT;
              } else {
                isGuarding = false;
              }

              const owed = +library?.utils?.fromWei(
                await BarnContract.methods.calculateRewards(item).call(),
                "ether"
              );

              return {
                id: item,
                tokenTraits,
                tokenURI: tokenURI.slice(29, tokenURI.length),
                stakeInfo,
                owed,
                isGuarding,
              };
            }
          )
        );

        depositOfOwner = depositOfOwner.sort(
          (prev: any, curr: any) => +prev.id - +curr.id
        );

        const unclaimedGEM = depositOfOwner.reduce(
          (prev: any, curr: any) => prev + curr.owed,
          0
        );
        const depositAdventurers = depositOfOwner.filter(
          (token) => token?.tokenTraits?.isAdventurer
        );
        const depositHunters = depositOfOwner.filter(
          (token) => !token?.tokenTraits?.isAdventurer
        );

        const currentGEMAmount = +library?.utils?.fromWei(
          await GemContract.methods.totalSupply().call(),
          "ether"
        );

        setData({
          minted,
          paidTokens,
          maxTokens,
          stats,
          numHuntersStolen,
          numAdventurersStolen,
          numHunters,
          numAdventurers,
          totalGEMEarned: +(
            library?.utils.fromWei(totalGEMEarned || 0, "ether") || 0
          ),
          totalStakePercent,
          mintCost: +(library?.utils.fromWei(mintCost || 0, "ether") || 0),
          balanceOfTokenUser: +(
            library?.utils.fromWei(balanceOfTokenUser || 0, "ether") || 0
          ),
          tokenAdventurers,
          tokenHunters,
          depositAdventurers,
          depositHunters,
          DAILY_GEM_RATE: DAILY_GEM_RATE_CONVERT,
          blockTimestamp,
          MAXIMUM_GLOBAL_GEM: MAXIMUM_GLOBAL_GEM_CONVERT,
          leaderboardData,
          unclaimedGEM,
          numAdventurersBurned,
          numHuntersBurned,
          isGamePaused,
          currentGEMAmount,
          hasMintPending,
          canMint,
          totalGPBurned,
        });
        setLoading("");
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  };

  const handleMint = async (amount: number, isStake: boolean) => {
    try {
      const { contract: HuntGameContract } = await getContractHunter(connector);
      const isWhile = await HuntGameContract.methods.isOpened().call();
      if (isWhile) {
        if (amount > 5) {
          notification.warning({
            message: "",
            description: "you can mint max 5 NFT items for premint.",
          });
          return;
        }
        await HuntGameContract.methods.premint(amount, isStake).call({
          from: account,
        });
        await HuntGameContract.methods
          .premint(amount, isStake)
          .send({
            from: account,
            value: 1250000000000000000 * amount,
          })
          .on("transactionHash", async () => {
            setLoading("Minting... ");
          })
          .on("receipt", async () => {
            setLoading("");
            setConfirming("Confirming...");
            notification.success({
              message: "",
              description: !isStake ? "Mint success" : "Mint & stake success",
            });
            tryNTimes(() =>
              getBlockchainData(
                !isStake ? "Mint success" : "Mint & stake success"
              )
            );
          });
      } else {
        await HuntGameContract.methods.mint(amount, isStake).call({
          from: account,
        });
        if (mintCost === 0) {
          await HuntGameContract.methods
            .mint(amount, isStake)
            .send({
              from: account,
              value: 1500000000000000000 * amount,
            })
            .on("transactionHash", async () => {
              setLoading("Minting... ");
            })
            .on("receipt", async () => {
              setLoading("");
              setConfirming("Confirming...");
              notification.success({
                message: "",
                description: !isStake ? "Mint success" : "Mint & stake success",
              });
              tryNTimes(() =>
                getBlockchainData(
                  !isStake ? "Mint success" : "Mint & stake success"
                )
              );
            });
        } else {
          if (amount * mintCost > balanceOfTokenUser || balanceOfTokenUser === 0) {
            notification.warning({
              message: "",
              description: 'Insufficient balance',
            });
            return;
          }
          else {
            await HuntGameContract.methods
            .mint(amount, isStake)
            .send({
              from: account,
            })
            .on("transactionHash", async () => {
              setLoading("Minting... ");
            })
            .on("receipt", async () => {
              setLoading("");
              setConfirming("Confirming...");
              notification.success({
                message: "",
                description: !isStake ? "Mint success" : "Mint & stake success",
              });
              tryNTimes(() =>
                getBlockchainData(
                  !isStake ? "Mint success" : "Mint & stake success"
                )
              );
            });
          }
        }
      }
    } catch (err) {
      handleError(err);
      setLoading("");
    }
  };

  const handleClaimMint = async () => {
    try {
      const { contract: HuntGameContract } = await getContractBarn(connector);
      await HuntGameContract.methods.mint().call({
        from: account,
      });
      await HuntGameContract.methods
        .mint()
        .send({
          from: account,
        })
        .on("transactionHash", async () => {
          setLoading("Claiming mint... ");
        })
        .on("receipt", async (receipt: any) => {
          let logs = [];
          if (Array.isArray(receipt?.events?.AdventurerStolen)) {
            receipt?.events?.AdventurerStolen.forEach((item: any) => {
              const { tokenId } = item?.returnValues;
              logs.push({
                tokenId,
                isAdventurer: true,
              });
            });
          } else if (receipt?.events?.AdventurerStolen) {
            const { tokenId } = receipt?.events?.AdventurerStolen?.returnValues;
            logs.push({
              tokenId,
              isAdventurer: true,
            });
          }

          if (Array.isArray(receipt?.events?.HunterStolen)) {
            receipt?.events?.HunterStolen.forEach((item: any) => {
              const { tokenId } = item?.returnValues;
              logs.push({
                tokenId,
                isAdventurer: false,
              });
            });
          } else if (receipt?.events?.HunterStolen) {
            const { tokenId } = receipt?.events?.HunterStolen?.returnValues;
            logs.push({
              tokenId,
              isAdventurer: false,
            });
          }

          let results = [] as any;

          logs.forEach((item: any) => {
            if (item.isAdventurer) {
              results.push({
                message: `Adventurer #${item.tokenId} was stolen`,
              });
            } else {
              results.push({
                message: `Hunter #${item.tokenId} was stolen`,
              });
            }
          });
          setLoading("");
          if (results.length > 0) {
            setWhatHappen(results);
            toggleOpen();
          }
          setConfirming("Confirming...");
          notification.success({
            message: "",
            description: "Claim mint success",
          });
          tryNTimes(() => getBlockchainData("Claim mint success"));
        });
    } catch (err) {
      handleError(err);
      setLoading("");
    }
  };

  const handleStake = async (tokenIds: Number[], clearSelect: any) => {
    try {
      const { contract: BarnContract } = await getContractBarn(connector);
      await BarnContract.methods
        .addManyToBarnAndPack(account, tokenIds)
        .call({
          from: account,
        });
      await BarnContract.methods
        .addManyToBarnAndPack(account, tokenIds)
        .send({
          from: account,
        })
        .on("transactionHash", async () => {
          setLoading("Staking... ");
        })
        .on("receipt", async () => {
          clearSelect();
          setLoading("");
          setConfirming("Confirming...");
          notification.success({
            message: "",
            description: "Stake success",
          });
          tryNTimes(() => getBlockchainData("Stake success"));
        });
    } catch (err) {
      handleError(err);
      setLoading("");
    }
  };

  const handleUnStake = async (
    tokenIds: Number[],
    isUnStake: boolean,
    clearSelect: any
  ) => {
    try {
      const { contract: BarnContract } = await getContractBarn(connector);
      await BarnContract.methods
        .claimManyFromBarnAndPack(tokenIds, isUnStake)
        .call({
          from: account,
        });
      await BarnContract.methods
        .claimManyFromBarnAndPack(tokenIds, isUnStake)
        .send({
          from: account,
          value: 10000000000000000,
        })
        .on("transactionHash", async () => {
          setLoading(isUnStake ? "UnStaking and Claiming... " : "Claiming... ");
        })
        .on("receipt", async (receipt: any) => {
          clearSelect();
          let logs = [];
          if (Array.isArray(receipt?.events?.HunterClaimed)) {
            receipt?.events?.HunterClaimed.forEach((item: any) => {
              const { earned, tokenId, unstaked } = item?.returnValues;
              logs.push({
                earned: +(library?.utils.fromWei(earned || 0, "ether") || 0),
                tokenId,
                isAdventurer: false,
                unstaked,
              });
            });
          } else if (receipt?.events?.HunterClaimed) {
            const { earned, tokenId, unstaked } =
              receipt?.events?.HunterClaimed?.returnValues;
            logs.push({
              earned: +(library?.utils.fromWei(earned || 0, "ether") || 0),
              tokenId,
              isAdventurer: false,
              unstaked,
            });
          }

          if (Array.isArray(receipt?.events?.AdventurerClaimed)) {
            receipt?.events?.AdventurerClaimed.forEach((item: any) => {
              const { earned, tokenId, unstaked } = item?.returnValues;
              logs.push({
                earned: +(library?.utils.fromWei(earned || 0, "ether") || 0),
                tokenId,
                isAdventurer: true,
                unstaked,
              });
            });
          } else if (receipt?.events?.AdventurerClaimed) {
            const { earned, tokenId, unstaked } =
              receipt?.events?.AdventurerClaimed?.returnValues;
            logs.push({
              earned: +(library?.utils.fromWei(earned || 0, "ether") || 0),
              tokenId,
              isAdventurer: true,
              unstaked,
            });
          }
          let results = [] as any;

          logs.forEach((item: any) => {
            if (item.isAdventurer) {
              if (item.unstaked) {
                if (item.earned === 0) {
                  results.push({
                    message: `Adventurer #${item.tokenId} left the forest, but all its $GEM was stolen by Hunters!`,
                  });
                } else {
                  results.push({
                    message: `Adventurer #${
                      item.tokenId
                    } left the forest and evaded the Hunters, earning ${item.earned.toFixed(
                      2
                    )} $GEM`,
                  });
                }
              } else {
                results.push({
                  message: `Adventurer #${
                    item.tokenId
                  } earned ${item.earned.toFixed(
                    2
                  )} $GEM, after paying a 20% tax to the Hunters.`,
                });
              }
            } else {
              if (item.unstaked) {
                results.push({
                  message: `Hunters #${
                    item.tokenId
                  } left the Forest, and received ${item.earned.toFixed(
                    2
                  )} $GEM!`,
                });
              } else {
                results.push({
                  message: `Hunters #${
                    item.tokenId
                  } collected a tax of ${item.earned.toFixed(2)} $GEM!`,
                });
              }
            }
          });
          setLoading("");
          setWhatHappen(results);
          setConfirming("Confirming...");
          toggleOpen();
          notification.success({
            message: "",
            description: isUnStake
              ? "UnStake & Claim success"
              : "Claim success",
          });
          tryNTimes(() =>
            getBlockchainData(
              isUnStake ? "UnStake & Claim success" : "Claim success",
              true
            )
          );
        });
    } catch (err) {
      handleError(err);
      setLoading("");
    }
  };

  useEffect(() => {
    getBlockchainData("", null, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connector, account, active, library]);

  const {
    minted,
    paidTokens,
    stats,
    numHuntersStolen,
    numAdventurersStolen,
    numHunters,
    numAdventurers,
    totalGEMEarned,
    totalStakePercent,
    mintCost,
    balanceOfTokenUser,
    tokenAdventurers,
    tokenHunters,
    depositAdventurers,
    depositHunters,
    leaderboardData,
    unclaimedGEM,
    MAXIMUM_GLOBAL_GEM,
    maxTokens,
    isGamePaused,
    currentGEMAmount,
    hasMintPending,
    canMint,
    totalGPBurned,
  } = data;

  const isStaking = depositAdventurers.length + depositHunters.length > 0;
  const buttonDisabled = loading || confirming !== "";
  return (
    <Layout>
      <Wrapper>
        {loading && (
          <Confirm>
            <Spin indicator={loadingIcon} />
            <Typography className="shadow">{loading}</Typography>
          </Confirm>
        )}
        {open && (
          <WhatHappenModal
            toggleOpen={toggleOpen}
            open={open}
            whatHappen={whatHappen}
          />
        )}

        <Container>
          {confirming !== "" && (
            <Confirm>
              <Spin indicator={loadingIcon} />
              <Typography className="shadow primary">FETCHING</Typography>
            </Confirm>
          )}
          <MiddleTextSection
            minted={minted}
            paidTokens={paidTokens}
            isStaking={isStaking}
            buttonDisabled={buttonDisabled}
          />

          {active && (
            <StakingSection
              balanceOfTokenUser={balanceOfTokenUser}
              tokenHunters={tokenHunters}
              tokenAdventurers={tokenAdventurers}
              depositAdventurers={depositAdventurers}
              depositHunters={depositHunters}
              handleStake={handleStake}
              handleUnStake={handleUnStake}
              totalGEMEarned={totalGEMEarned}
              unclaimedGEM={unclaimedGEM}
              buttonDisabled={buttonDisabled}
            />
          )}

          {active && (
            <>
              <StyledRow>
                <MintingSection
                  minted={minted}
                  paidTokens={paidTokens}
                  mintCost={mintCost}
                  handleMint={handleMint}
                  maxToken={maxTokens}
                  buttonDisabled={buttonDisabled}
                  isGamePaused={isGamePaused}
                  hasMintPending={hasMintPending}
                  handleClaimMint={handleClaimMint}
                  canMint={canMint}
                />
                {/* )} */}
                <GameDataSection
                  stats={stats}
                  numHunters={numHunters}
                  numAdventurers={numAdventurers}
                  numHuntersStolen={numHuntersStolen}
                  numAdventurersStolen={numAdventurersStolen}
                  currentGEMAmount={currentGEMAmount}
                  totalGEMEarned={totalGEMEarned}
                  totalStakePercent={totalStakePercent}
                  leaderboardData={leaderboardData}
                  MAXIMUM_GLOBAL_GEM={MAXIMUM_GLOBAL_GEM}
                  buttonDisabled={buttonDisabled}
                  totalGPBurned={totalGPBurned}
                />
              </StyledRow>
            </>
          )}
        </Container>
      </Wrapper>
    </Layout>
  );
};

const Container = styled.div`
  padding: 50px 50px 0;
  max-width: 1440px;
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
  grid-template-columns: 50% 50%;
  grid-column-gap: 2%;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Confirm = styled.div`
  position: fixed;
  right: 15px;
  top: 20vh;
  background: url(${confirmBg}) no-repeat center center;
  background-position: top;
  background-size: cover;
  opacity: 1;
  padding: 40px 50px 40px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 12px;
  z-index: 125;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  .anticon {z
    font-size: 26px !important;
    margin-right: 10px;
  }
`;

export default HomePage;
