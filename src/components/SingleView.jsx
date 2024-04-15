import PropTypes from 'prop-types';

function SingleView(props) {
  const {item, isDialogOpen, setIsDialogOpen} = props;
  return (
    <dialog open={isDialogOpen}>
      <h2>{item && item.title}</h2>
      {item && item.media_type.startsWith('image') ? (
        <img src={item.filename} alt={item.title} />
      ) : (
        <video controls src={item.filename} title={item.title}></video>
      )}
      <p>Created at: {item && item.created_at}</p>
      <p>{item && item.description}</p>
      <p>Created at: {new Date(item.created_at).toLocaleString('fi-FI')}</p>
      <p>Filesize: {item.filesize}</p>
      <p>Type: {item.media_type}</p>
      <button onClick={() => setIsDialogOpen(false)}>Close</button>
    </dialog>
  );
}

SingleView.propTypes = {
  item: PropTypes.object,
  isDialogOpen: PropTypes.bool.isRequired,
  setIsDialogOpen: PropTypes.func.isRequired,
};

export default SingleView;
