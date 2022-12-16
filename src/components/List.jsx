import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux"; //useSelector 훅 임포트, state값을 조회한다
import { useDispatch } from "react-redux"; //useDispatch 훅 임포트, 액션명령을 주고 받는다
import { updateTodo, deleteTodo } from "../redux/modules/todos"; // 액션객체 임포트
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate훅 임포트


function List() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todoStore = useSelector((state) => state.todos); //store 연결확인
  const bStore = todoStore.filter((state) => state.isDone === false);

  // dispatch로 명령 전달
  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const onToggle = (id) => {
    dispatch(updateTodo(id));
  };

  return (
    <StListContainer>
      <h1>Working on</h1>
      <StListBox>
        {bStore.map((todo) => {
          return (
            <StTodoBox key={todo.id}>
              <StDetailBtn onClick={() => navigate(`/detail/${todo.id}`)}>
                Details
              </StDetailBtn>
              <h1>{todo.title}</h1>
              <p>{todo.body}</p>
              <StBtnBox>
                <StBtn onClick={() => onDelete(todo.id)}>DELETE</StBtn>
                <StBtn onClick={() => onToggle(todo.id)}>
                  {todo.isDone ? "Back" : "DONE"}
                </StBtn>
              </StBtnBox>
            </StTodoBox>
          );
        })}
      </StListBox>

      <h1 style={{ marginTop: "80px" }}>Finished</h1>
      <StListBox>
        {todoStore.map((todo) => {
          if (todo.isDone === true) {
            return (
              <StTodoBox key={todo.id}>
                <StDetailBtn onClick={() => navigate(`/detail/${todo.id}`)}>
                  Details
                </StDetailBtn>
                <h1>{todo.title}</h1>
                <p>{todo.body}</p>
                <StBtnBox>
                  <StBtn onClick={() => onDelete(todo.id)}>DELETE</StBtn>
                  <StBtn onClick={() => onToggle(todo.id)}>
                    {todo.isDone ? "Back" : "DONE"}
                  </StBtn>
                </StBtnBox>
              </StTodoBox>
            );
          } else {
            return null;
          }
        })}
      </StListBox>
    </StListContainer>
  );
}

export default List;
const StListContainer = styled.div`
  margin-top : 80px;
  padding: 25px;
`;
const StListBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 25px;
`;
const StTodoBox = styled.div`
  width: 300px;
  height: 180px;
  border: none;

  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
`;

const StDetailBtn = styled.button`
  box-sizing: border-box;
  border: none;
  background-color: lightcoral;
  padding: 5px 5px;
  width: 65px;
  cursor: pointer;
`;
const StBtnBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 40px;
`;
const StBtn = styled.button`
  box-sizing: border-box;
  border: none;
  padding: 5px 10px;
  width: 90px;
  cursor: pointer;
  font-size: 1rem;
  &:first-of-type {
    background-color: coral;
  }
  &:nth-of-type(2) {
    background-color: coral;
  }
`;
