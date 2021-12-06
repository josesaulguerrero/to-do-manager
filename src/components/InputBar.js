//libraries and hooks
import { useContext, useRef } from "react";
import { v4 as uuid } from 'uuid';
//components
//assets and styled components
import { Button, Form, Input } from "../assets/styles/InputBar";
// context
import { todosContext } from "../context/todosContext";

export const InputBar = () => {
   const { addTodo } = useContext(todosContext);
   const reference = useRef();
   const onSubmit = (event) => {
      event.preventDefault();
      addTodo({
         content: reference.current.value,
         ID: uuid(),
         completed: false,
      });
   };
   return (
      <Form onSubmit={onSubmit}>
         <Input ref={reference} type="text" placeholder="Create a new todo..." />
         <Button type="submit">Add todo</Button>
      </Form>
   );
};