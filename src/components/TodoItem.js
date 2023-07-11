import PropTypes from 'prop-types';
import styles from '../styles/TodoItem.module.css';

const TodoItem = ({ itemProp, handleChange, delTodo }) => (
  <li className={styles.item}>
    <div className={styles.content}>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      <button type="button" onClick={() => delTodo(itemProp.id)}>
        Delete
      </button>
      {itemProp.title}
    </div>
  </li>
);

TodoItem.propTypes = {
  itemProp: PropTypes.object,
  handleChange: PropTypes.func,
  delTodo: PropTypes.func,
};

TodoItem.defaultProps = {
  itemProp: {},
  handleChange: () => {},
  delTodo: () => {},
};

export default TodoItem;
