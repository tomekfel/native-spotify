import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import { Album } from '../../types';

export type SongListItemProps = {
  album: Album;
};

const SongListItem = (props: SongListItemProps) => {
  const { album } = props;
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image style={styles.image} source={{ uri: album.imageUri }} />
      <View style={styles.details}>
        {/* Title */}
        <Text style={styles.title}>{album.title}</Text>

        {/* Artist */}
        <Text style={styles.artist}>{album.artist}</Text>
      </View>
    </View>
  );
};

export default SongListItem;
