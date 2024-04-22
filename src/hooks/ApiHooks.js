import {useEffect, useReducer, useState} from 'react';
import {fetchData} from '../lib/fetchData';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const {getUserById} = useUser();

  const getMedia = async () => {
    const mediaResult = await fetchData(
      import.meta.env.VITE_MEDIA_API + '/media',
    );

    const mediaWithUser = await Promise.all(
      mediaResult.map(async (mediaItem) => {
        const username = await getUserById(mediaItem.user_id);
        return {...mediaItem, username};
      }),
    );

    console.log(mediaWithUser);

    setMediaArray(mediaWithUser);
  };

  useEffect(() => {
    getMedia();
  }, []);

  return {mediaArray};
};

const useUser = () => {
  const getUserById = async (userId) => {
    const userResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/' + userId,
    );
    return userResult.username;
  };

  return {getUserById};
};

export {useMedia, useUser};
