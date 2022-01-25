import ArrowLeftOutlined from '@ant-design/icons/lib/icons/ArrowLeftOutlined';
import {FC} from 'react';
import {Link, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import {Typography} from '../Typography';
import Whitepaper from '../../assets/images/Whitepapers.svg';
import Whitepaper1 from '../../assets/images/WhitepapersMo.svg';

const Navbar: FC = () => {
  const location = useLocation();

  return (
    <Header>
      <Link to='/whitepaper'>
        <img src={Whitepaper} style={{height: '75px'}} alt ="whitepaper" />
      </Link>
      {location.pathname === '/minting' && <Link to='/game'>
        <Typography m='30px 0' $size='16px' className='shadow primary'> <StyledIcon/> Back to Game
        </Typography>
      </Link>}

    </Header>
  );
};

export default Navbar;

const StyledIcon = styled(ArrowLeftOutlined)`
  font-size:24px;
`

const Header = styled.header`
  min-height: 64px;
  padding: 5px 80px;
  font-size: 14px;
  background: transparent;
  max-width: 1440px;
  margin: 0 auto;
  text-align: left;
  width: 100%;
  @media (max-width: 480px) {
    padding: 5px 15px;
    .ant-typography {
      margin-top: 50px;
      font-size:18px;
    }
  }
  @media (max-width: 1200px) {
    text-align: left;
  }
  @media (max-width: 1020px) {
    text-align: left;
  }
`;
