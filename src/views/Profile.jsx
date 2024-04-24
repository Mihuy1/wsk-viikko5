import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useUser} from '../hooks/ApiHooks';
import {useEffect, useState} from 'react';

const Profile = (props) => {
  const [user, setUser] = useState(null);
  const {getUserByToken} = useUser();

  const getUser = async () => {
    try {
      const token = localStorage.getItem('token');
      const userData = await getUserByToken(token);
      setUser(userData.user);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div>
        <h2>Profile</h2>
        {user && <p>Käyttäjätunnus: {user.username} </p>}
        {user && <p>Sähköposti: {user.email} </p>}
        {user && (
          <p>Luotu: {new Date(user.created_at).toLocaleString('fi-FI')} </p>
        )}
      </div>
    </>
  );
};

Profile.propTypes = {};

export default Profile;
