import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Single from '../views/Single';
import {useContext} from 'react';
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
        {user && (
          <button
            className="deleteButton"
            onClick={() => {
              handleDelete(item.media_id);
            }}
          >
            Delete
          </button>
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
