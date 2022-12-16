import React from "react";
import styled from "styled-components";

// useParams는 path에 있는 id값을 조회할 수 있게 해주는 훅!
// useNavigate는 컴포넌트 간의 연결을 도와주는 훅! (다른 종류로는 Linkto가 있음)
import { useParams, useNavigate } from "react-router-dom";

// useSelector를 통해 store에 있는 state를 구독!
import { useSelector } from "react-redux";

function Detail() {
  const param = useParams();
  const navigate = useNavigate();

  const todoStore = useSelector((state) => state.todos);

  const bStore = todoStore.filter((state) => state.id === param.id);
  // console.log(bStore);
  return (
    <StDetailContainer>
      <StDetailBox>
        <StHeadContainer>
          <h3>ID - {param.id}</h3>
          <StButton onClick={() => navigate("/")}>Back</StButton>
        </StHeadContainer>

        {bStore.map((todo) => {
          return (
            <StTodoDescBox key={todo.id}>
              <h1>{todo.title}</h1>
              <p>{todo.body}</p>
            </StTodoDescBox>
          );
        })}
      </StDetailBox>
    </StDetailContainer>
  );
}

export default Detail;

const StDetailContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #000000f6;
`;

const StDetailBox = styled.div`
  border: none;

  background-color: white;

  width: 500px;
  height: 500px;

  display: flex;
  flex-direction: column;

  padding: 20px;
`;
const StHeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > h3 {
    color: black;
  }
`;
const StButton = styled.button`
  display: inline-block;

  border: none;

  background-color: coral;

  width: 120px;
  height: 40px;

  cursor: pointer;

  font-weight: bold;
`;

const StTodoDescBox = styled.div`
  & > h1,
  p {
    color: black;
  }
`;
