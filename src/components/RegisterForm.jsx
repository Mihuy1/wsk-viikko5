import {useNavigate} from 'react-router-dom';
import useForm from '../hooks/FormHooks';
import {useAuthentication} from '../hooks/ApiHooks';

// RegisterForm.jsx
const RegisterForm = () => {
  const {register} = useAuthentication();
  const navigate = useNavigate();

  const initValues = {
    username: '',
    password: '',
    email: '',
  };

  const doRegister = async () => {
    console.log('doRegister', inputs);
    try {
      const userData = await register(inputs);
      console.log('doRegister', userData);
      localStorage.setItem('token', userData.token);
      navigate('/');
    } catch (e) {
      alert(e.message);
    }
  };

  const {handleSubmit, handleInputChange, inputs} = useForm(
    doRegister,
    initValues,
  );

  console.log(inputs);

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Registeruser">Username</label>
          <input
            name="username"
            type="text"
            id="Registeruser"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Registerpassword">Password</label>
          <input
            name="password"
            type="password"
            id="Registerpassword"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Registeremail">Email</label>
          <input
            name="email"
            type="email"
            id="Registeremail"
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
