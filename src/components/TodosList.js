/*eslint-disable */
import TodoItem from "./TodoItem";
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

export default TodosList;
