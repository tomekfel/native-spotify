import React from 'react';
import { View, Text, FlatList } from 'react-native';
import AlbumComponent from '../Album';
import styles from './styles';
import { Album } from '../../types';

export type AlbumCategoryProps = {
  title: string;
  albums: Album[];
};

const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>{props.title}</Text>

      {/* List of albums */}
      <FlatList
        data={props.albums}
        renderItem={({ item }) => <AlbumComponent album={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  );
};

export default AlbumCategory;
