import {useState} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import useForm from '../hooks/FormHooks';

const Login = () => {
  const [toggleForm, setToggleForm] = useState(true);

  const toggle = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <>
      {toggleForm ? <LoginForm /> : <RegisterForm />}
      <button onClick={() => toggle()}>
        {toggleForm ? 'Register' : 'Login'}
      </button>
    </>
  );
};

export default Login;
