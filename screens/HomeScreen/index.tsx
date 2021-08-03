import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import albumCategories from '../../data/albumCategories';
import AlbumCategory from '../../components/AlbumCategory';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* {data && <AlbumCategory title={data?.title} albums={data?.albums} />} */}
      <FlatList
        data={albumCategories}
        renderItem={({ item }) => <AlbumCategory id={item.id} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;
