import styled from "styled-components";
import promise from "../images/promise.jpg";
const Container = styled.div`
  height: 100vh;
`;
const IntroduceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  font-size: 1rem;
  font-weight: 600;
  color: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%);

  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  & span {
    background: linear-gradient(to right, #eeb1b0, #8ca6ce);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2rem;
  }
  & p {
    background: linear-gradient(to right, #dedae6, #eeff05c1);
    -webkit-background-clip: text;
    font-size: 1.5rem;
    -webkit-text-fill-color: transparent;
  }
  & img {
    width: 70%;
    height: auto;
    border-radius: 50px;
  }
`;

export default function About() {
  return (
    <div>
      <Container>
        <IntroduceBox>
          <span className="introduce-title">하루살이는 무엇일까요?</span>
          <p className="introduce-content">
            하루종일 고생한 당신을 위로해 주는 사이트 입니다.
          </p>
          <img src={promise} />
        </IntroduceBox>
      </Container>
    </div>
  );
}
