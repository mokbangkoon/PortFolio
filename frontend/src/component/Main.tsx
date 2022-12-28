import styled from "styled-components";
import sadImg1 from "../images/sad1.jpg";
import sadImg2 from "../images/sad2.jpg";
import sadImg3 from "../images/sad3.jpg";
import sadImg4 from "../images/sad4.jpg";
import careImg from "../images/care.jpg";
import happyImg from "../images/happy.jpg";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { useRef, useEffect, useState } from "react";

const Container = styled.div`
  color: white;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const InnerBox1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  div:nth-child(1) {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    animation: fadeItem1 1s ease-in-out;
    font-size: 50px;
  }
  div:nth-child(2) {
    padding-top: 100px;
    color: white;
    animation: fadeItem2 1s ease-in-out;
    font-size: 30px;
    transition-delay: 10s;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  }
  .down-arrow {
    color: pink;
    animation: fadeItem3 1.5s infinite ease-in-out;
    padding-top: 50px;
    font-size: 100px;
  }

  @keyframes fadeItem1 {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeItem2 {
    from {
      opacity: 0;
      transform: translateY(50px);
    }

    to {
      opacity: 1;
    }
  }
  @keyframes fadeItem3 {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const InnerBox2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  img {
    width: 200px;
    height: 200px;
  }
  .hidden {
    opacity: 0;
  }

  .show {
    :nth-child(1) {
      opacity: 1;
      transition: 2s;
      transition-delay: 1s;
    }
    :nth-child(2) {
      opacity: 1;
      transition: 2s;
      transition-delay: 2s;
    }
    :nth-child(3) {
      opacity: 1;
      transition: 2s;
      transition-delay: 3s;
    }
    :nth-child(4) {
      opacity: 1;
      transition: 2s;
      transition-delay: 4s;
    }
    :nth-child(5) {
      opacity: 1;
      transition: 2s;
      transition-delay: 5s;
    }
  }
`;
const InnerBox3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

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

  img {
    width: 200px;
    height: 200px;
  }
`;

export default function Main() {
  const element = useRef<HTMLDivElement>(null);
  const observer = new IntersectionObserver(
    (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.5 },
  );
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach(el => observer.observe(el));
  }, []);

  const clickedDownArrow = () => {
    element.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  return (
    <div>
      <Container>
        <InnerBox1>
          <div>오늘 하루 어떠셨나요?</div>
          <div>아래로 내려보세요 !</div>
          <BsFillArrowDownCircleFill
            onClick={clickedDownArrow}
            className="down-arrow"
          />
        </InnerBox1>
        <div ref={element}>
          <InnerBox2>
            <div className="scroll-reveal">
              <h1 className="hidden">많이 힘드셨죠?</h1>
              <img src={sadImg1} className="hidden" alt="로딩중" />
              <img src={sadImg2} className="hidden" alt="로딩중" />
              <img src={sadImg3} className="hidden" alt="로딩중" />
              <img src={sadImg4} className="hidden" alt="로딩중" />
            </div>
          </InnerBox2>
        </div>

        <InnerBox3>
          <h1>제가 위로해 드릴게요</h1>
          <img src={careImg} alt="로딩중" />
        </InnerBox3>
        <InnerBox4>
          <h1>행복을 만드는 습관.. 시작해 볼까요?</h1>
          <img src={happyImg} alt="로딩중" />
        </InnerBox4>
      </Container>
    </div>
  );
}
