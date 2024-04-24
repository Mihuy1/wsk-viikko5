import {Link, Outlet} from 'react-router-dom';
import {useUserContext} from '../hooks/ContextHooks';
import {useEffect} from 'react';

const Layout = () => {
  const {user, handleAutoLogin, handleLogout} = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {user && (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/upload">Upload</Link>
              </li>
              <li>
                <a href="#" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </>
          )}
          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
