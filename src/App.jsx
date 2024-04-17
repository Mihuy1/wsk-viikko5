import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './views/Home';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Single from './views/Single';

const App = () => {
  return (
    <>
      <Router>
        <h1>My App</h1>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="upload" element={<Upload />} />
            <Route path="single" element={<Single />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
