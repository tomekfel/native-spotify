import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Album } from '../../types';

export type SongItemProps = {
  album: Album;
};
const SongItem = (props: SongItemProps) => {
  const { album } = props;

  // console.log(album);
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('PlayerScreen', props);
  };

  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <Image
          style={styles.image}
          source={{ uri: album.imageUri.replace('150x150', '250x250') }}
        />
        <View style={styles.details}>
          <Text style={styles.title}>{album.title}</Text>
          <Text style={styles.artist}>{album.artist}</Text>

          {/* Play Button */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>PLAY</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SongItem;
