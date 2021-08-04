import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Album } from '../../types';
import { AppContext } from '../../AppContext';

export type SongItemProps = {
  album: Album;
};
const SongItem = (props: SongItemProps) => {
  const { album } = props;
  const { setSongId } = React.useContext(AppContext);
  const { setAlbumId } = React.useContext(AppContext);

  // console.log(album);
  const navigation = useNavigation();

  const onPress = () => {
    // navigation.navigate('PlayerScreen', props);
    console.log('onPress', album);
    // setSongId(album.track_yt_link);
    setAlbumId(album);
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
            <TouchableOpacity
              onPress={onPress}
              disabled={album.track_yt_link === '19Uh4sth7IQ' ? true : false}
            >
              <View
                style={[
                  styles.button,
                  album.track_yt_link === '19Uh4sth7IQ'
                    ? styles.disabled
                    : null,
                ]}
              >
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
