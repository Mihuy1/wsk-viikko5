import {createContext, useState} from 'react';
import {useAuthentication, useUser} from '../hooks/ApiHooks';
import {useNavigate} from 'react-router-dom';

const UserContext = createContext(null);

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const token = localStorage.getItem('token');

  const {login} = useAuthentication();
  const {getUserByToken} = useUser();
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      const userData = await login(credentials);
      console.log('doLogin', userData);
      localStorage.setItem('token', userData.token);
      // set user to state
      setUser(userData.user);

      alert('Welcome ' + userData.user.username + '!');

      navigate('/');
    } catch (e) {
      alert(e.message);
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      setUser(null);
      navigate('/');
    } catch (e) {
      alert(e.message);
    }
  };

  const handleAutoLogin = async () => {
    try {
      if (token) {
        const userData = await getUserByToken(token);
        setUser(userData.user);
        const origin = location.state.from.pathname || '/';
        navigate(origin);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <UserContext.Provider
      value={{user, handleLogin, handleLogout, handleAutoLogin, token}}
    >
      {children}
    </UserContext.Provider>
  );
};

export {UserProvider, UserContext};
