import PropTypes from 'prop-types';

function SingleView(props) {
  const {item, isDialogOpen, setIsDialogOpen} = props;
  return (
    <dialog open={isDialogOpen}>
      <h2>{item && item.title}</h2>
      {item && item.media_type === 'image/jpeg' ? (
        <img src={item.filename} alt={item.title} />
      ) : (
        <video controls>
          <source src={item && item.filename} type={item && item.media_type} />
        </video>
      )}
      <p>{item && item.description}</p>
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
