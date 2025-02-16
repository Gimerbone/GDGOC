import { useState } from 'react';
import TaskInput from '../../components/Input';
import Lists from '../../components/Lists';

function TodoList() {
  const [editedId, setEditedId] = useState('');
  const [lists, setLists] = useState([
    { id: 1, name: 'List 1' },
    { id: 2, name: 'List 2' },
    { id: 3, name: 'List 3' },
  ]);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <div style={{ maxWidth: '640px', width: '100%' }}>
        <h1>Todo List</h1>
        <TaskInput
          onEditTask={(input) => {
            const newLists = [...lists];
            newLists.forEach((list) => {
              if (list.id === editedId) {
                list.name = input;
              }
            });
            setLists(newLists);
            setEditedId('');
          }}
          editedList={lists.find((list) => list.id === editedId)}
          onAddTask={(input) => {
            const newID = lists.length > 0 ? lists[lists.length - 1].id + 1 : 0;
            setLists((lists) => [
              ...lists,
              {
                id: newID,
                name: input,
              },
            ]);
          }}
        />
        <Lists
          onEdit={(id) => {
            setEditedId(id);
          }}
          
          onDelete  = {(id) => {
            setLists((prevLists) => prevLists.filter((list) => list.id !== id));
          }}

          lists={lists}
        />
      </div>
    </div>
  );
}

export default TodoList;
