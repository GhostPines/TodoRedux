import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import nextId from "react-id-generator";
// useDispatch를 통해 dispatch를 생성한다.
// 액션 생성 함수를 불러온다. 
// nextId를 통해 id를 생성한다.
function Form() {
  const dispatch = useDispatch();
  // useState를 통해 todo 객체를 생성한다. todo 객체의 키값은 id, title, body, isDone이다.
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  // input창의 value값을 변경할 때마다 todo 객체의 키값을 변경한다.
  const onChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value, id: nextId() });
  };

  // form태그의 onSubmit 이벤트를 통해 todo 객체를 dispatch한다.
  const onSubmit = (e) => {
    e.preventDefault();
    // nextId.current += 1;
    // dispatch를 통해 액션을 보낸다. 보내면 액션객체의 payload에 들어간 후 리듀서 실행
    dispatch(addTodo({ ...todo }));
    // console.log(todo);
    setTodo({ id: 0, title: "", body: "", isDone: false }); // input창 초기화~
  };
  return (
    <StForm onSubmit={onSubmit}>
      <StInputGroup>


        <StInput
          type="text"
          name="title"
          value={todo.title}
          placeholder="Tell me what you gonna do"
          onChange={onChange}
          required
        />

        <StInput
          type="text"
          name="body"
          value={todo.body}
          placeholder="give me some details"
          onChange={onChange}
        />
      </StInputGroup>
      <StButton>LEAVE</StButton>
    </StForm>
  );
}

const StForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 70px;
  box-sizing: border-box;
  padding: 25px;
`;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  gap : 1.8rem;
`;

const StButton = styled.button`
  background-color: coral;
  width: 120px;
  height: 40px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 20px;
  color: white;
  border : none;

`;

const StInput = styled.input`
  box-sizing: border-box;

  border: none;
  width: 400px;
  height: 40px;
  color: black;
  padding-left: 20px;
`;

export default Form;
