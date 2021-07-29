import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Album } from '../../types';

export type SongItemProps = {
  album: Album;
};
const SongItem = (props: SongItemProps) => {
  const { album } = props;
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('PlayerScreen', props);
  };

  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <Image style={styles.image} source={{ uri: album.imageUri }} />
        <View style={styles.details}>
          <Text style={styles.title}>{album.title}</Text>
          <Text style={styles.artist}>{album.artist}</Text>
          <Button title='Play' onPress={onPress}></Button>
        </View>
      </View>
    </View>
  );
};

export default SongItem;
