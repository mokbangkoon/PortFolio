import styled from 'styled-components';
import { Link, redirect } from 'react-router-dom';
import logoImg from '../images/logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState } from 'react';

const NavContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;
const NavLogo = styled.div`
  img {
    width: 100px;
    height: 80px;
    border-radius: 100%;
    :hover {
      box-shadow: 3px 3px 3px 3px #ff7300;
      transition: 0.3s;
    }
  }
  flex: 20%;
  @media (max-width: 1020px) {
    flex: 10%;
  }
`;
const NavTitle = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  flex: 40%;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 760;
  font-size: 60px;
  line-height: 119px;
  @media (max-width: 1020px) {
    font-size: 30px;
  }
  @media (max-width: 700px) {
    justify-content: left;
  }
`;
const NavSideBar = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: white;
    :hover {
      color: salmon;
      transition: 0.5s;
    }
  }
  flex: 20%;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 760;
  font-size: 25px;
  line-height: 119px;

  @media (max-width: 700px) {
    display: none;
  }
  @media (max-width: 1020px) {
    font-size: 15px;
  }
`;
const NavMobileBar = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: flex;
    cursor: pointer;
  }
`;
const NavMobileSideBar = styled.div<{ isAppear: boolean }>`
  display: ${props => (props.isAppear ? '' : 'none')};

  background-color: black;
  height: 100vh;
  width: 100vw;
  position: fixed;
  overflow: hidden;

  a {
    text-decoration: none;
    color: white;
  }
`;
const NavInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90vh;
  font-size: 55px;
`;
const NavCloseBtn = styled.div`
  position: relative;
  cursor: pointer;
`;

export default function NavBar() {
  const [isAppear, setIsAppear] = useState(false);
  return (
    <div>
      <NavMobileSideBar isAppear={isAppear}>
        <NavCloseBtn>
          <AiOutlineCloseCircle
            color="white"
            size={40}
            onClick={() => setIsAppear(false)}
          />
        </NavCloseBtn>
        <NavInner>
          <Link to="/" onClick={() => setIsAppear(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsAppear(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setIsAppear(false)}>
            Contact
          </Link>
          <Link to="/play" onClick={() => setIsAppear(false)}>
            Play
          </Link>
        </NavInner>
      </NavMobileSideBar>

      <NavContainer>
        <NavLogo>
          <Link to="/">
            <img src={logoImg} alt="이미지로딩" />
          </Link>
        </NavLogo>
        <NavTitle>
          <span>행복해지는 습관</span>
        </NavTitle>
        <NavSideBar>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/play">Play</Link>
        </NavSideBar>
        <NavMobileBar>
          <AiOutlineMenu
            size={40}
            color="white"
            onClick={() => setIsAppear(!isAppear)}
          />
        </NavMobileBar>
      </NavContainer>
    </div>
  );
}
