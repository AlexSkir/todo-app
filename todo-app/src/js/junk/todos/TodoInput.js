import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveNewTodo } from './todosSlice';

const TodoInput = () => {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('idle');
  const dispatch = useDispatch();

  const handleChange = (e) => setText(e.target.value);

  const handleKeyDown = async (e) => {
    const trimmedText = text.trim();
    if (e.which === 13 && trimmedText) {
      // Create and dispatch the thunk function itself
      setStatus('loading');
      // Wait for the promise returned by saveNewTodo
      await dispatch(saveNewTodo(trimmedText));
      // And clear out the text input
      setText('');
      setStatus('idle');
    }
  };

  const isLoading = status === 'loading';
  const placeholder = isLoading ? '' : 'What needs to be done?';
  const loader = isLoading ? <div className="loader" /> : null;

  return (
    <div className="TodoInput">
      <input
        className="new-todo"
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
      />
      {loader}
    </div>
  );
};

export default TodoInput;
