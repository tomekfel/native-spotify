import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import styles from './styles';

import AlbumCategory from '../../components/AlbumCategory';

const albumCategory = {
  id: '1',
  title: 'Happy Vibes',
  albums: [
    {
      id: '1',
      imageUri:
        'https://geo-media.beatport.com/image_size/150x150/57dd3664-d5f8-4f7a-93c3-dbdb58f0a796.jpg',
      artist: 'artist',
      title: 'title',
    },
  ],
};

const HomeScreen = () => {
  const [data, setData] = React.useState(albumCategory);

  const getData = async () => {
    const { data } = await axios.get(
      `https://www.beatporttopcharts.com/php/api/track/search.php?genre_id=1`
    );

    /* replace dynamic size in the url */
    data.albums.map((album: any) => {
      album.imageUri = album.imageUri.replace('{w}x{h}', '150x150');
    });
    setData(data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <AlbumCategory title={data.title} albums={data.albums} />
    </View>
  );
};

export default HomeScreen;
