import styled from 'styled-components';
import backgroundImg from '../images/background.svg';
import sadImg1 from '../images/sad1.jpg';
import sadImg2 from '../images/sad2.jpg';
import sadImg3 from '../images/sad3.jpg';
import sadImg4 from '../images/sad4.jpg';
import careImg from '../images/care.jpg';
import happyImg from '../images/happy.jpg';
import { useState, useRef, useEffect } from 'react';

const Container = styled.div`
  color: white;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const InnerBox1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const InnerBox2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  img {
    width: 200px;
    height: 200px;
  }
`;
const InnerBox3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  img {
    width: 200px;
    height: 200px;
  }
`;
const InnerBox4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  img {
    width: 200px;
    height: 200px;
  }
`;
const InnerBox5 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  img {
    width: 200px;
    height: 200px;
  }
`;

export default function Main() {
  return (
    <div>
      <Container>
        <InnerBox1>
          <h1>오늘 하루 어떠셨나요?</h1>
        </InnerBox1>
        <InnerBox2>
          <h1>많이 힘드셨죠?</h1>
          <img src={sadImg1} />
          <img src={sadImg2} />
          <img src={sadImg3} />
          <img src={sadImg4} />
        </InnerBox2>
        <InnerBox3>
          <h1>제가 위로해 드릴게요</h1>
          <img src={careImg} />
        </InnerBox3>
        <InnerBox4>
          <h1>행복을 만드는 습관.. 시작해 볼까요?</h1>
          <img src={happyImg} />
        </InnerBox4>
      </Container>
    </div>
  );
}
