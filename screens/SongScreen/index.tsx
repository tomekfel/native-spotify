import { useRoute, RouteProp } from '@react-navigation/native';
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import { Album } from '../../types';
import SongItem from '../../components/SongItem';

type StackParamsList = {
  A: undefined;
  B: {
    album: Album;
  };
};

const SongScreen = () => {
  const route = useRoute<RouteProp<StackParamsList, 'B'>>();
  const { album } = route.params;

  return (
    <View style={styles.container}>
      <SongItem album={album} />
    </View>
  );
};

export default SongScreen;
