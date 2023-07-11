import { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please enter valid input');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add todo"
          value={title}
          onChange={handleChange}
          className="input-text"
        />
        <button className="input-submit" type="submit">
          Submit
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

InputTodo.propTypes = {
  addTodoItem: PropTypes.func,
};

InputTodo.defaultProps = {
  addTodoItem: () => {},
};

export default InputTodo;
