import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './views/Home';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Single from './views/Single';
import Login from './views/Login';
import Logout from './views/Logout';
import {UserProvider} from './contexts/UserContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <>
      <Router basename={import.meta.env.BASE_URL}>
        <h1>My App</h1>

        <UserProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="upload"
                element={
                  <ProtectedRoute>
                    <Upload />
                  </ProtectedRoute>
                }
              />
              <Route path="single" element={<Single />} />
              <Route path="login" element={<Login />} />
              <Route path="logout" element={<Logout />} />
            </Route>
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
};

export default App;
