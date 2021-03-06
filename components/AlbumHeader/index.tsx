import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Album } from '../../types';
import { AppContext } from '../../AppContext';

export type AlbumHeaderProps = {
  title: string;
  album: Album[];
};
const AlbumHeader = (props: AlbumHeaderProps) => {
  const { title, album } = props;
  const navigation = useNavigation();
  const { setAlbumId } = React.useContext(AppContext);

  const onPress = () => {
    // navigation.navigate('PlayerScreen', props);
    setAlbumId(album);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: album[0].imageUri }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.creator}>BY SPOTIFY - 38.4K LIKES</Text>

      {/* Play Button */}
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>PLAY ALL</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumHeader;
