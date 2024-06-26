import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import {useEffect, useState} from 'react';
import {fetchData} from '../lib/fetchData';
import {useMedia} from '../hooks/ApiHooks';
const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {mediaArray} = useMedia();

  console.log(mediaArray);

  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Owner</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              setSelectedItem={setSelectedItem}
              setIsDialogOpen={setIsDialogOpen}
            />
          ))}
        </tbody>
      </table>
      <SingleView
        item={selectedItem}
        setSelectedItem={setSelectedItem}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </>
  );
};
export default Home;
