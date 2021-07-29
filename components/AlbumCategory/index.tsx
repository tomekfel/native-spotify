import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AlbumComponent from '../Album';
import styles from './styles';
import axios from 'axios';
import { Album } from '../../types';

export type AlbumCategoryProps = {
  id: string;
};

const AlbumCategory = (props: AlbumCategoryProps) => {
  const navigation = useNavigation();
  const [data, setData] = React.useState<{ title: string; albums: Album[] }>();
  // const [data, setData] = React.useState();

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get(
      `https://www.beatporttopcharts.com/php/api/track/search.php?genre_id=${props.id}`
    );

    /* replace dynamic size in the url */
    data.albums.map((album: any) => {
      album.imageUri = album.imageUri.replace('{w}x{h}', '150x150');
    });
    setData(data);
  };

  const onPress = () => {
    // console.log(props.album.title);
    navigation.navigate('AlbumScreen', data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        {/* Title */}
        <Text style={styles.title}>{data?.title}</Text>
        {data && (
          <View style={styles.button}>
            <Button title='Play All' onPress={onPress}></Button>
          </View>
        )}
      </View>
      {/* List of albums */}
      <FlatList
        data={data?.albums}
        renderItem={({ item }) => <AlbumComponent album={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

export default AlbumCategory;
