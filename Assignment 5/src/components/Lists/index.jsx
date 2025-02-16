import PropTypes from 'prop-types';
import styles from './index.module.css';
function Lists({ lists, onEdit, onDelete }) {
  return (
    <div
      style={{
        marginTop: '20px',
        width: '100%',
      }}
    >
      {lists.map((list) => {
        return (
          <ListItem onEdit={onEdit} onDelete={onDelete} id={list.id} key={list.id}>
            {list.name}
          </ListItem>
        );
      })}
    </div>
  );
}

Lists.propTypes = {
  lists: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

function ListItem({ children, onEdit, onDelete, id }) {
  return (
    <div className={styles.listItem}>
      <p>{children}</p>
      <div style={{ display: 'flex', gap: '12px' }}>
        <button
          onClick={() => {
            onEdit(id);
          }}
          className='button'
        >
          Edit
        </button>
        <button
          style={{
            backgroundColor: "red",
          }}
          onClick={() => {
            onDelete(id);
          }}
          className='button'
        >
          Delete
        </button>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  children: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Lists;
