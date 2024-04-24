import {useUserContext} from '../hooks/ContextHooks';

const Logout = () => {
  const {handleLogout, token} = useUserContext();
  return (
    <>
      <h1>Logout</h1>
      {token ? (
        <>
          <p>Logged in</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Not logged in</p>
      )}
    </>
  );
};

export default Logout;
