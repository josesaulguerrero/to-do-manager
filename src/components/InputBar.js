//libraries and hooks
import React, { useContext, useRef } from "react";
import { v4 as uuid } from 'uuid';
//components
//assets and styled components
import { Button, Form, Input } from "@styles/InputBarStyles";
// context
import { todosContext } from "@context/todosContext";

export const InputBar = () => {
   const { addTodo } = useContext(todosContext);
   const reference = useRef();
   const onSubmit = (event) => {
      event.preventDefault();
      if (!reference.current.value.trim()) {
         reference.current.setCustomValidity("this field can't be empty");
         return;
      }
      addTodo({
         content: reference.current.value,
         ID: uuid(),
         completed: false,
      });
      reference.current.value = "";
   };
   return (
      <Form onSubmit={onSubmit}>
         <Input ref={reference} type="text" placeholder="Create a new todo..." />
         <Button type="submit">Add todo</Button>
      </Form>
   );
};