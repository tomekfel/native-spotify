import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { Album } from '../../types';

export type AlbumProps = {
  album: Album;
};

const AlbumComponent = (props: AlbumProps) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image style={styles.image} source={{ uri: props.album.imageUri }} />

      {/* Headline */}
      <Text style={styles.artist}>{props.album.artist}</Text>
      <Text style={styles.title}>{props.album.title}</Text>
    </View>
  );
};

export default AlbumComponent;
