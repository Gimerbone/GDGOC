import { useEffect, useState } from 'react';
import styles from './index.module.css';
import PropTypes from 'prop-types';
const TaskInput = ({ onAddTask, onEditTask, editedList }) => {
  const [input, setInput] = useState('');

  const editedId = editedList ? editedList.id : undefined;

  const placeholder = editedId ? 'Edit Task' : 'Masukan Task';
  const textAdd = editedId ? 'Edit' : 'Add';

  useEffect(() => {
    if (editedList) {
      setInput(editedList.name);
    }
  }, [editedList]);

  return (
    <div className={styles.inputContainer}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='text'
        className={styles.input}
        placeholder={placeholder}
      />
      <button
        onClick={() => {
          if (editedId) {
            onEditTask(input);
          } else {
            onAddTask(input);
          }
          setInput('');
        }}
        className='button'
      >
        {textAdd}
      </button>
    </div>
  );
};

TaskInput.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
  editedList: PropTypes.object.isRequired,
};

export default TaskInput;
