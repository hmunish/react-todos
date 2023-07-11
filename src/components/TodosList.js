import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todosProps, handleChange, delTodo } = props;
  return (
    <ul>
      {todosProps.map((todos) => (
        <TodoItem
          key={todos.id}
          itemProp={todos}
          handleChange={handleChange}
          delTodo={delTodo}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todosProps: PropTypes.node,
  handleChange: PropTypes.func,
  delTodo: PropTypes.func,
};

TodosList.defaultProps = {
  todosProps: () => {},
  handleChange: () => {},
  delTodo: () => {},
};

export default TodosList;
