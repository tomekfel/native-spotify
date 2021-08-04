import React from 'react';
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';

import AlbumComponent from '../Album';
import styles from './styles';
import axios from 'axios';
import { Album } from '../../types';

export type AlbumCategoryProps = {
  id: string;
};

const AlbumCategory = (props: AlbumCategoryProps) => {
  const navigation = useNavigation();
  const [data, setData] = React.useState<{
    id: string;
    title: string;
    albums: Album[];
  }>();
  // const [data, setData] = React.useState();
  const [hidden, setHidden] = React.useState<boolean>(false);

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

  const storeLocalData = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@spotify_genres', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getLocalData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@spotify_genres');

      if (jsonValue != null) {
        const oldGenres = JSON.parse(jsonValue);
        const newGenres = oldGenres.filter((id: string) => {
          return id !== data?.id;
        });
        // console.log('newGenres', newGenres);
        storeLocalData(newGenres);
      } else {
        console.log('Nothing in the local storage');
      }
    } catch (e) {
      // error reading value
      console.log('error', e);
    }
  };

  const onHide = () => {
    // console.log('hide', data?.id);
    setHidden(true);
    /* update async storage */
    getLocalData();
  };

  if (hidden) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
        {/* Title */}
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.title}>{data?.title}</Text>
        </TouchableOpacity>
        {data && (
          <>
            <TouchableOpacity onPress={onHide}>
              <AntDesign name='minuscircleo' size={25} color='white' />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={onPress}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Play All</Text>
              </View>
            </TouchableOpacity> */}
          </>
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
