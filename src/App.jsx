import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './views/Home';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Single from './views/Single';
import Login from './views/Login';
import Logout from './views/Logout';

const App = () => {
  return (
    <>
      <Router basename={import.meta.env.BASE_URL}>
        <h1>My App</h1>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="upload" element={<Upload />} />
            <Route path="single" element={<Single />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
