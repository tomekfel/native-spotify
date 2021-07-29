import { useRoute, RouteProp } from '@react-navigation/native';
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import { Album } from '../../types';
import SongListItem from '../../components/SongListItem';
import AlbumHeader from '../../components/AlbumHeader';

type StackParamsList = {
  A: undefined;
  B: {
    title: string;
    albums: Album[];
  };
};

const AlbumScreen = () => {
  const route = useRoute<RouteProp<StackParamsList, 'B'>>();
  const { title, albums } = route.params;
  // console.log('route', route.params);
  return (
    <View style={styles.container}>
      <FlatList
        data={albums}
        renderItem={({ item }) => <SongListItem album={item} />}
        keyExtractor={(item) => item.id}
        horizontal={false}
        ListHeaderComponent={(item) => (
          <AlbumHeader album={albums} title={title} />
        )}
      />
    </View>
  );
};

export default AlbumScreen;
