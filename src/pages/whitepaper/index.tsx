import { FC } from "react";
import styled from "styled-components";
import Layout from "../../components/layout";
import background from "../../assets/images/background.png";
import whitepaperbg from "../../assets/images/whitepaper/whitepaper_frame.svg";
import logoimg from "../../assets/images/Yield_Hunt_Title.png";
import titleImg from "../../assets/images/whitepaper/dialog_box_other_side.svg";
import adventurerImg from "../../assets/images/whitepaper/adventurer.svg";
import subscriptionImg2 from "../../assets/images/frames/WPFram1_1.svg";
import subscriptionImg3 from "../../assets/images/frames/WPF4.svg";
import "../../assets/fonts/stylesheet.css";
import {Link} from 'react-router-dom';
const LandingPage: FC = () => {
  return (
    <Layout>
      <Wrapper>
        <Container>
          <StyledRow>
            <Link to="/home">
            <img src={logoimg} style={{ minHeight: "350px" }} alt="Logo" />
            </Link>
            <OverView>
              <TitleDiv>
                <Title>WHITEPAPER</Title>
              </TitleDiv>
              <OverViewDetail>
                <img
                  src={adventurerImg}
                  alt="adventurer"
                  style={{
                    float: "left",
                    maxWidth: "135px",
                    marginRight: "55px",
                  }}
                />
                <DescriptionDiv
                  style={{
                    paddingTop: 60,
                    paddingRight: 40,
                    color: "black",
                    marginBottom: 100,
                  }}
                >
                  As you all know, Wolf Game has brought an incredible concept
                  on Ethereum. Today, we are announcing the launch of{" "}
                  <span style={{ color: "white" }}>Yield Hunt</span>, that will
                  be resuming all Wolf Game’s bests features as well as adding
                  our own ones. We have the pretension to become the next best
                  P2E on the <span style={{ color: "red" }}>avalanche</span>{" "}
                  ecosystem.
                </DescriptionDiv>
              </OverViewDetail>
            </OverView>
            <Storysection>
              <Subtitle>STORY</Subtitle>
              <DescriptionDiv style={{ marginTop: "40px" }}>
                In a distant forest, lie immeasurable treasures, named{" "}
                <span style={{ color: "#10c10d" }}>$GEM</span>. They were
                discovered a Friday 13th night by a famous adventurer named Joe.
                Once he brought it back to town, an incredible amount of people
                started to search for this same treasure, to became as rich as
                Joe.
                <br />
                <br /> Among this forest, adventurers will find{" "}
                <span style={{ color: "#10c10d" }}>$GEM</span>, that could be
                used to recruit more adventurers to search for more
                <span style={{ color: "#10c10d" }}>$GEM</span> again.
                <br />
                <br /> The problem is, the adventurers were not the only ones
                that were interested in this fabulous forest full of{" "}
                <span style={{ color: "#10c10d" }}>$GEM</span>. Some malicious
                people went to the forest, who will try to kidnap the braves
                adventurers. These are greatest danger of the humans; the
                Hunters! <br />
                <br /> Although the common reputation of hunters is that they
                are psychopaths who want to kidnap poor adventurers, their real
                intentions are actually to kidnap adventurers and steal their{" "}
                <span style={{ color: "#10c10d" }}>$GEM</span>. <br />
                <br /> The hunters usually keep watching for the forest edges.
                As long as you keep searching for{" "}
                <span style={{ color: "#10c10d" }}>$GEM</span> it should be
                fine, but if you try to escape ( unstake ) or enter the forest (
                mint ) there is a chance a hunter find you and kidnap you, be
                careful when searching for the sacred treasure.
                <br />
                Whatever will happen, one thing is certain, wether it is hunters
                or the adventurers, a lot of people are going to become rich
                thanks to the incredible treasure{" "}
                <span style={{ color: "#10c10d" }}>$GEM</span>.
              </DescriptionDiv>
              <DescriptionDiv
                style={{ color: "white", fontSize: "1.7rem", marginTop: 50 }}
              >
                Let's begin the Yield Hunt!
              </DescriptionDiv>
            </Storysection>
            <TdlrSection>
              <Subtitle style={{ paddingLeft: "8%" }}>TL;DR</Subtitle>
              <DescriptionDiv style={{ marginTop: "30px" }}>
                - Only 10,000 Gen 0 can be minted using{" "}
                <span style={{ color: "red" }}>AVAX</span>.
              </DescriptionDiv>
              <DescriptionDiv>
                &nbsp;&nbsp;&nbsp;- Whitelisted people can mint for 1.25{" "}
                <span style={{ color: "red" }}>$AVAX</span>.
              </DescriptionDiv>
              <DescriptionDiv>
                &nbsp;&nbsp;&nbsp;- Mint price for public launch : 1.50{" "}
                <span style={{ color: "red" }}>$AVAX</span>.
              </DescriptionDiv>
              <br />
              <DescriptionDiv>
                - 10% chance to mint a Hunter / 90% chance to mint an Adventurer
              </DescriptionDiv>
              <br />
              <DescriptionDiv>
                - Another 40,000 Gen 1 can only be minted using{" "}
                <span style={{ color: "#10c10d" }}>$GEM</span>
              </DescriptionDiv>
              <br />
              <DescriptionDiv>
                - An adventurer can start searching for{" "}
                <span style={{ color: "#10c10d" }}>$GEM</span> (stake). But an
                Adventurer trying to bring his treasure back to his village (
                harvest ) will be spotted by a Hunter for sure and will drop 20%
                of his <span style={{ color: "#10c10d" }}>$GEM</span> during the
                run.
              </DescriptionDiv>
              <br />
              <DescriptionDiv>
                - If an Adventurer is unstaked (Can only be done if the
                Adventurer has accumulated 2 days worth of{" "}
                <span style={{ color: "#10c10d" }}>$GEM</span>.), the Hunters
                has 50% to catch all of the accumulated{" "}
                <span style={{ color: "#10c10d" }}>$GEM</span> and keep it for
                themselves .
              </DescriptionDiv>
              <br />
              <DescriptionDiv>
                - When a new person (Adventurer or Hunter ) is recruited and
                enter the forest(mint), the Hunters will attempt to kidnap them
                (steal NFT). If successful, only one Hunter will be rewarded
                with this kidnapping.
              </DescriptionDiv>
              <br />
              <DescriptionDiv>
                - <span style={{ color: "#10c10d" }}>$GEM</span> can be launered
                (staked) through the Temple to earn different currencies without
                any risk of <span style={{ color: "#10c10d" }}>$GEM</span> being
                stolen.
              </DescriptionDiv>
            </TdlrSection>
            {/* Minting */}
            <TdlrSection>
              <Subtitle style={{ paddingLeft: "8%" }}>MINTING</Subtitle>
              <MintDetail style={{ marginTop: "30px" }}>
                <MintingTable>
                  <table>
                    <tbody>
                      <tr>
                        <td style={{ width: "60%", paddingLeft: 15 }}>
                          Token ID
                        </td>
                        <td style={{ width: "40%", paddingLeft: 15 }}>
                          Minting Cost
                        </td>
                      </tr>
                      <tr>
                        <td>1 to 10,000 (Gen 0)</td>
                        <td>
                          1.25/1.50 <span style={{ color: "red" }}>$AVAX</span>{" "}
                          (WL/No WL)
                        </td>
                      </tr>
                      <tr>
                        <td>10,001 to 20,000</td>
                        <td>
                          20,000 <span style={{ color: "#10c10d" }}>$GEM</span>
                        </td>
                      </tr>
                      <tr>
                        <td>20,001 to 40,000</td>
                        <td>
                          40,000 <span style={{ color: "#10c10d" }}>$GEM</span>
                        </td>
                      </tr>
                      <tr>
                        <td>40,001 to 50,000</td>
                        <td>
                          80,000 <span style={{ color: "#10c10d" }}>$GEM</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </MintingTable>
              </MintDetail>
            </TdlrSection>
            {/* Adventurer */}
            <TdlrSection>
              <Subtitle style={{ paddingLeft: "8%" }}>ADVENTURERS</Subtitle>
              <DescriptionDiv
                style={{
                  padding: "10px 7%",
                  fontWeight: 600,
                  marginTop: "30px",
                }}
              >
                You have a 90% chance of minting an Adventurer, each with unique
                traits. Here are the actions they can take:
              </DescriptionDiv>
              <MintDetail style={{ marginTop: "10px" }}>
                <AdventurerTable>
                  <table>
                    <tbody style={{ fontSize: "0.8rem" }}>
                      <tr>
                        <td style={{ width: "18%", fontSize: "11px" }}>
                          Action
                        </td>
                        <td style={{ width: "35%", fontSize: "11px" }}>
                          Notes
                        </td>
                        <td style={{ width: "47%", fontSize: "11px" }}>Risk</td>
                      </tr>
                      <tr>
                        <td>Enter forest (stake)</td>
                        <td>
                          Accumulate 10,000{" "}
                          <span style={{ color: "#10c10d" }}>$GEM</span> / day
                          (prorated to the second)
                        </td>
                        <td>No risk</td>
                      </tr>
                      <tr>
                        <td>Collect $GEM (claim)</td>
                        <td>
                          Receive 80% of{" "}
                          <span style={{ color: "#10c10d" }}>$GEM</span>{" "}
                          accumulated on your Adventurer
                        </td>
                        <td>
                          Hunters take a guaranteed 20% tax on collected{" "}
                          <span style={{ color: "#10c10d" }}>$GEM</span> in
                          return for not attacking the Adventurer. Taxed{" "}
                          <span style={{ color: "#10c10d" }}>$GEM</span> is
                          split among all the Hunters currently staked in the
                          forest.
                        </td>
                      </tr>
                      <tr>
                        <td>Leave Forest (unstake)</td>
                        <td>
                          Adventurer is removed from the Forest and all {" "}
                          <span style={{ color: "#10c10d" }}>$GEM</span>{" "}
                          is collected. Can only be done if the Adventurer has accumulated 
                          2 days worth of 
                          <span style={{ color: "#10c10d"}}>$GEM</span>{""}
                          to keep it warm
                        </td>
                        <td>
                          50% of ALL of your accumulated {" "}
                          <span style={{ color: "#10c10d" }}>$GEM</span> being
                          stolen by Hunters. Stolen{" "}
                          <span style={{ color: "#10c10d" }}>$GEM</span> is
                          split among all the Hunters currently staked in the
                          forest.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </AdventurerTable>
              </MintDetail>
            </TdlrSection>
            {/* Hunter */}
            <TdlrSection>
              <Subtitle style={{ paddingLeft: "8%" }}>HUNTERS</Subtitle>
              <DescriptionDiv
                style={{
                  padding: "10px 7%",
                  fontWeight: 600,
                  marginTop: "30px",
                }}
              >
                You have a 10% chance of minting a Hunter, each with unique
                traits
              </DescriptionDiv>
              <MintDetail style={{ marginTop: "10px" }}>
                <HunterTable>
                  <table>
                    <tbody>
                      <tr>
                        <td style={{ width: "20%", paddingLeft: 15 }}>
                          Action
                        </td>
                        <td style={{ width: "70%", paddingLeft: 15 }}>Notes</td>
                        <td style={{ width: "10%", paddingLeft: 15 }}>Risk</td>
                      </tr>
                      <tr>
                        <td>Stake Hunter</td>
                        <td>
                          Earn your share of the 20% tax of all{" "}
                          <span style={{ color: "#10c10d" }}>$GEM</span>{" "}
                          generated by Adventurer in the Forest
                        </td>
                        <td>No risk</td>
                      </tr>
                      <tr>
                        <td>
                          Claim <span style={{ color: "#10c10d" }}>$GEM</span>
                        </td>
                        <td>
                          Receive all{" "}
                          <span style={{ color: "#10c10d" }}>$GEM</span> taxes
                          accrued for the staked Hunter
                        </td>
                        <td>No risk</td>
                      </tr>
                      <tr>
                        <td>Unstake Hunter</td>
                        <td>
                          Receive all{" "}
                          <span style={{ color: "#10c10d" }}>$GEM</span> taxes
                          accrued for the staked Hunter
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </HunterTable>
              </MintDetail>
            </TdlrSection>
            {/* GEM */}
            <TdlrSection>
              <Subtitle style={{ paddingLeft: "8%" }}>$GEM</Subtitle>
              <MintDetail style={{ marginTop: "30px" }}>
                <GemTable>
                  <table>
                    <tbody>
                      <tr>
                        <td style={{ width: "20%", paddingLeft: 15 }}>
                          Action
                        </td>
                        <td style={{ width: "30%", paddingLeft: 15 }}>Notes</td>
                        <td style={{ width: "50%", paddingLeft: 15 }}>Risk</td>
                      </tr>
                      <tr>
                        <td>
                          Mint a new Adventurer using{" "}
                          <span style={{ color: "#10c10d" }}>$GEM</span>
                        </td>
                        <td>
                          There is a 10% chance that the NFT is actually a
                          Hunter!
                        </td>
                        <td>
                          10% chance of the new Adventurer or Hunter being
                          stolen by a staked Hunter.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </GemTable>
              </MintDetail>
            </TdlrSection>
            {/* Conclusion */}
            <TdlrSection>
              <Subtitle style={{ paddingLeft: "8%" }}>100% ON-CHAIN</Subtitle>
              <DescriptionDiv style={{ padding: "0 13%", marginTop: "40px" }}>
                Not the first, and certainly not the last. But as long as
                Avalanche is running, your Adventurers and Hunters will survive.
                Always available and always yours. Your traits and all the pixel
                art reside in the contracts themselves, nowhere else.
              </DescriptionDiv>
              <br />
              <br />
              <br />
              <DescriptionDiv>
                Thanks to Yield Hunt, everyone will be able to play as risky as
                they want. Want to stay exposed to the market ? You can, want to
                give a try at keeping all your $GEM, while risking losing it all
                ? There are multiple strategies that you will be able to adopt.
                This is what makes the game more exciting.
              </DescriptionDiv>
              <br />
              <br />
              <DescriptionDiv style={{ textAlign: "center" }}>
                Anyway, do you want to enter the forest?
              </DescriptionDiv>
            </TdlrSection>
          </StyledRow>
        </Container>
      </Wrapper>
    </Layout>
  );
};

const GemTable = styled.div`
  background: url(${subscriptionImg2}) no-repeat center;
  background-size: 100% 100%;
  // min-height: 100%;
  margin: 0 7%;
  padding: 40px 50px;
  color: black;
  @media (max-width: 850px) {
    padding: 60px 20px 42px 20px;
    table > tbody {
      font-size: 10px !important;
    }
    tr > td:first {
      font-size: 10px;
    }
  }
`;

const HunterTable = styled.div`
  background: url(${subscriptionImg2}) no-repeat center;
  background-size: 100% 100%;
  // min-height: 100%;
  margin: 0 7%;
  padding: 45px 60px;
  color: black;
  @media (max-width: 850px) {
    padding: 60px 20px 42px 20px;
    table > tbody {
      font-size: 10px !important;
    }
    tr > td:first {
      font-size: 10px;
    }
  }
`;

const AdventurerTable = styled.div`
  background: url(${subscriptionImg2}) no-repeat center;
  background-size: 100% 100%;
  // min-height: 100%;
  margin: 0 7%;
  padding: 70px 55px;
  color: black;
  @media (max-width: 850px) {
    padding: 60px 20px 42px 20px;
    table > tbody {
      font-size: 10px !important;
    }
    tr > td:first {
      font-size: 10px;
    }
  }
`;
const MintingTable = styled.div`
  background: url(${subscriptionImg3}) no-repeat;
  background-size: 100% 100%;
  min-height: 100%;
  width: 86%;
  padding: 50px 15px 40px 15px;
  color: black;
`;

const MintDetail = styled.section`
  text-align: -webkit-center;
  //   margin-top: 20px;
`;
const TdlrSection = styled.section`
  text-align: left;
  margin-top: 50px;
`;
const Subtitle = styled.text`
  font-size: 6.5rem;
  font-family: alagard;
  color: black;
  @media (max-width: 850px) {
    font-size: 40px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
const Storysection = styled.section`
  padding-top: 20px;
`;
const DescriptionDiv = styled.div`
  padding: 0 10%;
  color: black;
  line-height: 30px;
  @media (max-width: 767px) {
    padding: 0 5% !important;
  }
`;
const OverViewDetail = styled.div`
  padding: 0 10%;
`;
const Title = styled.div`
  // background:white;
  border-radius: 50px;
  color: black;
  font-size: 2.5rem;
  padding: 23px;
  margin-bottom: 7px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const TitleDiv = styled.div`
  background: url(${titleImg}) no-repeat center;
  text-align: center;
  max-width: 60%;
  background-size: 100% 100%;
  text-align: -webkit-center;
  padding: 5px;
`;
const OverView = styled.div`
  text-align: center;
  text-align: -webkit-center;
  margin-top: 15px;
`;
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
  background: url(${whitepaperbg}) no-repeat center center;
  background-size: 100% 100%;
  margin-bottom: 30px;
  // margin-top: 30px;
  max-width: 1300px;

  min-width: 100%;
  padding-top: 150px;
  //   min-height: 100vh;
  text-align: center;
  padding-bottom: 200px;
`;

export default LandingPage;
