import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Single from '../views/Single';

const MediaRow = (props) => {
  const {item, setSelectedItem, setIsDialogOpen} = props;

  const handleClick = () => {
    setSelectedItem(item);
    setIsDialogOpen(true);
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
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
  setIsDialogOpen: PropTypes.func.isRequired,
};

export default MediaRow;
