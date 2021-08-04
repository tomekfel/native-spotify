import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';
import { Album } from '../../types';
import { AppContext } from '../../AppContext';

export type SongListItemProps = {
  album: Album;
};

const SongListItem = (props: SongListItemProps) => {
  const { album } = props;
  const { setSongId } = React.useContext(AppContext);

  const onPlay = () => {
    // console.log(album);
    setSongId(album.track_yt_link);
  };

  return (
    <TouchableWithoutFeedback
      onPress={onPlay}
      disabled={album.track_yt_link === '19Uh4sth7IQ'}
    >
      <View
        style={[
          styles.container,
          album.track_yt_link === '19Uh4sth7IQ' ? styles.disabled : null,
        ]}
      >
        <Image style={styles.image} source={{ uri: album.imageUri }} />
        <View style={styles.details}>
          <Text style={styles.title}>{album.title}</Text>
          <Text style={styles.artist}>{album.artist}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SongListItem;
