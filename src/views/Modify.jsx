import useForm from '../hooks/FormHooks';
import {useNavigate} from 'react-router-dom';
import {useMedia} from '../hooks/ApiHooks';

// Modify.jsx
const Modify = ({item}) => {
  const navigate = useNavigate();
  const {putMedia} = useMedia();

  const initValues = {
    title: item.title,
    description: item.description,
  };
  const doModify = async () => {
    try {
      const token = localStorage.getItem('token');

      await putMedia(item.media_id, inputs, token);

      navigate('/');
    } catch (e) {
      alert(e.message);
    }
  };

  const {handleSubmit, handleInputChange, inputs} = useForm(
    doModify,
    initValues,
  );

  return (
    <>
      <h1>Modify</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            id="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit">Modify</button>
      </form>
    </>
  );
};

export default Modify;
