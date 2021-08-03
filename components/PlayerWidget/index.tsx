import React from 'react';
import { View, Text, Image } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe';

import styles from './styles';
import { Album } from '../../types';

const song = {
  artist: 'Bou',
  artist_name: 'bou',
  genre_name: 'drum-bass',
  genre_pretty: 'Drum & Bass',
  id: '15468185',
  imageUri:
    'https://geo-media.beatport.com/image_size/150x150/981ee069-d80b-4074-9a4d-88fac00958f6.jpg',
  position: '1',
  title: 'Talk To Me (Original Mix)',
  track_name: 'talk-to-me',
  track_release: '2021-07-15',
  track_yt_link: 'YKzgFf9JZkY',
};

const PlayerWidget = () => {
  const [playlist, setPlaylist] = React.useState<string[]>([]);
  const [playing, setPlaying] = React.useState(false);

  const onStateChange = React.useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      console.log('video has finished playing!');
    }
  }, []);

  const togglePlaying = React.useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.playerContainer}>
        <YoutubePlayer
          height={75}
          play={playing}
          // playList={playlist}
          onChangeState={onStateChange}
          videoId={'YKzgFf9JZkY'}
        />
      </View>
      {/* <View style={styles.bottomContainer}> */}
      <View style={styles.rightContainer}>
        <View style={styles.details}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
      </View>
      <View style={styles.iconsContainer}>
        <AntDesign name='hearto' size={30} color='white' />
        <FontAwesome
          name='play'
          size={30}
          color='white'
          onPress={togglePlaying}
        />
      </View>
      {/* </View> */}
    </View>
  );
};

export default PlayerWidget;
