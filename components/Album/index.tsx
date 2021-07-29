import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { Album } from '../../types';
import { useNavigation } from '@react-navigation/native';

export type AlbumProps = {
  album: Album;
};

const AlbumComponent = (props: AlbumProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('SongScreen', props);
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {/* Image */}
        <Image style={styles.image} source={{ uri: props.album.imageUri }} />

        {/* Headline */}
        <Text style={styles.title}>{props.album.title}</Text>
        <Text style={styles.artist}>{props.album.artist}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AlbumComponent;
