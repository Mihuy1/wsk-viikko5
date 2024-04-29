import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useUserContext} from '../hooks/ContextHooks';

const MediaRow = (props) => {
  const {item, deleteMedia} = props;

  const {user} = useUserContext();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteMedia(id);
    }
  };

  return (
    <tr key={item.media_id}>
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.username}</td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>
        <Link to="/single" state={{item}}>
          Show
        </Link>{' '}
        {user && user.username === item.username && (
          <>
            <button
              className="deleteButton"
              onClick={() => {
                handleDelete(item.media_id);
              }}
            >
              Delete
            </button>
            <Link to={`/modify/${item.media_id}`}>Modify</Link>
          </>
        )}
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
  deleteMedia: PropTypes.func.isRequired,
};

export default MediaRow;
