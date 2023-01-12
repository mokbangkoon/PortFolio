import styled from "styled-components";
const Container = styled.div`
  color: violet;
`;
export default function Play() {
  return (
    <div>
      <Container>
        <div>
          <button>위로 하기</button>
        </div>
        <div>
          <button>위로 받기</button>
        </div>

        <div> 야 응원한다 새끼야 </div>
      </Container>
    </div>
  );
}
