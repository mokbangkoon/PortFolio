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
  text-align: center;
  font-size: 2rem;
  flex-direction: column;
  .down-arrow {
    align-items: center;
    color: pink;
    animation: fadeItem3 1.5s infinite ease-in-out;
    padding-top: 50px;
    font-size: 100px;
  }
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
  flex-direction: column;
  height: 100vh;
  font-size: 2rem;

  img {
    width: 400px;
    height: 400px;
  }
  .hidden {
    opacity: 0;
  }
  .show {
    :nth-child(1) {
      opacity: 1;
      transform: translateX(-50px);
      transition: 2s;
      transition-delay: 1s;
    }
    :nth-child(2) {
      opacity: 1;
      transform: translateX(300px);
      transition: 2s;
      transition-delay: 2s;
    }
  }
  .down-arrow {
    color: pink;
    animation: fadeItem3 1.5s infinite ease-in-out;
    padding-top: 50px;
    font-size: 100px;
  }
`;
const InnerBox4 = styled.div<{ delay: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(85vh);
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .hidden {
    opacity: 0;
  }
  img {
    width: 200px;
    height: 200px;
    margin-bottom: 50px;
  }

  .show {
    :nth-child(1) {
      opacity: 1;
      transition: 2s;
      transition-delay: 1s;
    }
    :nth-child(2) {
      opacity: 1;
      transform: rotate3d(2, 2, 2, 15deg);
      transition: 2s;
      transition-delay: 2s;
    }
    :nth-child(3) {
      opacity: 1;
      transform: rotate3d(1, 1, 1, 0deg);
      transition: 2s;
      ${({ delay }) => {
        if (delay) {
          return " transition-delay: 0s;";
        } else {
          return "transition-delay: 3s;";
        }
      }}

      :hover {
        cursor: pointer;
        background-color: black !important;
        transition-delay: 0s !important;
        box-shadow: 5px 10px 10px 10px #ebecf0;
        transition: 0.3s;
      }
    }
  }
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  height: 160px;
  width: 500px;

  /* Gray/Gray700 */

  background: #ff882c;
  border-radius: 24px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 1;
  height: 60px;

  /* Bold/T5 */

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  /* identical to box height, or 125% */

  letter-spacing: -0.025em;

  /* Font/700 */

  color: #fff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export default function Main() {
  const [delay, setDelay] = useState(false);

  const element = useRef<null[] | HTMLDivElement[]>([]);
  const observer = new IntersectionObserver(
    (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          // entry.target.children[0].classList.add("show");
          // entry.target.children[1].classList.add("show");
          // entry.target.children[2].classList.add("show");
          // entry.target.children[3].classList.add("show");
          // entry.target.children[4].classList.add("show");

          for (let i = 0; i < entry.target.children.length; i++) {
            entry.target?.children?.[i].classList.add("show");
          }
        }
      });
    },
    { threshold: 0.5 },
  );
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".item");
    hiddenElements.forEach(el => observer.observe(el));
  }, []);

  const clickedDownArrow = (n: number) => {
    element?.current[n]?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <div>
      <Container>
        <InnerBox1>
          <div>오늘 하루 어떠셨나요? </div>
          <div>아래로 내려보세요 !</div>
          <BsFillArrowDownCircleFill
            onClick={() => clickedDownArrow(0)}
            className="down-arrow"
          />
        </InnerBox1>
        <div
          ref={el => {
            element.current[0] = el;
          }}
        >
          <InnerBox2>
            <div className="item">
              <h1 className="hidden">많이 힘드셨죠?</h1>
              <img src={sadImg1} className="hidden" alt="로딩중" />
              <img src={sadImg2} className="hidden" alt="로딩중" />
              <img src={sadImg3} className="hidden" alt="로딩중" />
              <img src={sadImg4} className="hidden" alt="로딩중" />
            </div>

            <BsFillArrowDownCircleFill
              onClick={() => clickedDownArrow(1)}
              className="down-arrow"
            />
          </InnerBox2>
        </div>
        <div
          ref={el => {
            element.current[1] = el;
          }}
        >
          <InnerBox3>
            <div className="item">
              <h1 className="hidden">제가 위로해 드릴게요</h1>
              <img className="hidden" src={careImg} alt="로딩중" />
            </div>
            <BsFillArrowDownCircleFill
              onClick={() => clickedDownArrow(2)}
              className="down-arrow"
            />
          </InnerBox3>
        </div>
        <div
          ref={el => {
            element.current[2] = el;
          }}
        >
          <InnerBox4 delay={delay}>
            <div className="item">
              <h1 className="hidden">행복을 만드는 습관.. 시작해 볼까요?</h1>
              <img className="hidden" src={happyImg} alt="로딩중" />
              <Button className="hidden" onMouseOver={() => setDelay(true)}>
                시작하기
              </Button>
            </div>
          </InnerBox4>
        </div>
      </Container>
    </div>
  );
}
