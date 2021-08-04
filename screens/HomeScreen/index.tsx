import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import albumCategories from '../../data/albumCategories';
import AlbumCategory from '../../components/AlbumCategory';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const [genres, setGenres] = React.useState<{ id: string }[] | any>();

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@spotify_genres');

      if (jsonValue != null) {
        console.log(
          'There is something in the local storage',
          JSON.parse(jsonValue)
        );

        if (JSON.parse(jsonValue).length === 0) {
          setGenres(albumCategories);
        } else {
          setGenres(JSON.parse(jsonValue));
        }
      } else {
        console.log('Nothing in the local storage');
        setGenres(albumCategories);
        storeData(albumCategories);
      }
    } catch (e) {
      // error reading value
      console.log('error', e);
    }
  };

  const storeData = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@spotify_genres', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@spotify_genres');
    } catch (e) {
      // remove error
    }

    console.log('Done.');
  };

  return (
    <View style={styles.container}>
      {/* {data && <AlbumCategory title={data?.title} albums={data?.albums} />} */}
      <FlatList
        data={genres}
        renderItem={({ item }) => <AlbumCategory id={item} />}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default HomeScreen;
