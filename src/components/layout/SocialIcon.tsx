import React, {useState} from 'react';

// import { Button } from 'antd';
import styled from 'styled-components';
import twitter from '../../assets/images/TwitterDefault.svg';
import twitter1 from '../../assets/images/TwitterMO.svg';
import Discord from '../../assets/images/discord.svg';
import Discord1 from '../../assets/images/DiscordMouseOver.svg';
import Medium from '../../assets/images/Medium.svg';
import Medium1 from '../../assets/images/MediumMo.svg';

const SocialIcon = () => {
  const [image, setImage] = useState(twitter);
  const [dis_image, setDisImage] = useState(Discord);
  const [mid_image, setMidImage] = useState(Medium);
  return (
    <IconContainer>
      <a href="https://twitter.com/YieldHuntAVAX" onMouseEnter={() => setImage(twitter1)} 
      onMouseLeave={() => setImage(twitter)} target="_blank" rel="noreferrer">
        <IconImg src={image} alt="twitter" />
      </a>
      <a href="http://discord.gg/yieldhuntgame" onMouseEnter={() => setDisImage(Discord1)} 
      onMouseLeave={() => setDisImage(Discord)} target="_blank" rel="noreferrer">
        <IconImg src={dis_image} alt="Discord" style={{marginTop:"-9px"}}/>
      </a>
      <a href="https://medium.com/@yieldhuntgame/yield-hunt-avax-p2e-5be300bc87ea" onMouseEnter={() => setMidImage(Medium1)} 
      onMouseLeave={() => setMidImage(Medium)} target="_blank" rel="noreferrer">
        <IconImg src={mid_image} style={{height: '65px'}} alt="Medium" />
      </a>
    </IconContainer>
  );
};

export default SocialIcon;
const IconImg = styled.img`
  height: 80px;
  :hover {
    -webkit-animation: action 1s infinite  alternate;
    animation: action 1s infinite  alternate;
  }
  @-webkit-keyframes action {
    0% { transform: translateY(0); }
    100% { transform: translateY(5px); }
}

@keyframes action {
    0% { transform: translateY(0); }
    100% { transform: translateY(5px); }
}
`;
const IconContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 50px;
  @media (max-width: 768px) {
    padding: 0;
    text-align: center;
  }
`;
