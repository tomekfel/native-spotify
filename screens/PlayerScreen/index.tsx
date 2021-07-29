import { useRoute, RouteProp } from '@react-navigation/native';
import React from 'react';
import { View, Button } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import styles from './styles';
import { Album } from '../../types';

type StackParamsList = {
  A: undefined;
  B: {
    album: Album | Album[];
  };
};

const PlayerScreen = () => {
  const route = useRoute<RouteProp<StackParamsList, 'B'>>();
  const { album } = route.params;
  const [playlist, setPlaylist] = React.useState<string[]>([]);
  const [playing, setPlaying] = React.useState(false);

  React.useEffect(() => {
    Array.isArray(album)
      ? setPlaylist(
          album.map(function (album) {
            return album['track_yt_link'];
          })
        )
      : setPlaylist([album.track_yt_link]);
  }, [album]);

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
      <View>
        <YoutubePlayer
          height={300}
          play={playing}
          playList={playlist}
          onChangeState={onStateChange}
          videoId={'YKzgFf9JZkY'}
        />
        <Button title={playing ? 'pause' : 'play'} onPress={togglePlaying} />
      </View>
    </View>
  );
};

export default PlayerScreen;
