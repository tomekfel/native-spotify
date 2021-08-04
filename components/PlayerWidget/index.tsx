import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import YoutubePlayer, { YoutubeIframeRef } from 'react-native-youtube-iframe';
import { AppContext } from '../../AppContext';
import styles from './styles';

// const song = {
//   artist: 'Bou',
//   artist_name: 'bou',
//   genre_name: 'drum-bass',
//   genre_pretty: 'Drum & Bass',
//   id: '15468185',
//   imageUri:
//     'https://geo-media.beatport.com/image_size/150x150/981ee069-d80b-4074-9a4d-88fac00958f6.jpg',
//   position: '1',
//   title: 'Talk To Me (Original Mix)',
//   track_name: 'talk-to-me',
//   track_release: '2021-07-15',
//   track_yt_link: 'YKzgFf9JZkY',
// };

const PlayerWidget = () => {
  const playerRef = React.useRef<YoutubeIframeRef>(null);
  const [playlist, setPlaylist] = React.useState<string[]>([]);
  const [playing, setPlaying] = React.useState(false);
  const [elapsed, setElapsed] = React.useState<number | null>(null);
  const [duration, setDuration] = React.useState<number | null>(null);

  const [song, setSong] = React.useState<any>({});
  const [album, setAlbum] = React.useState<any>({});

  const { songId } = React.useContext(AppContext);
  const { albumId } = React.useContext(AppContext);

  React.useEffect(() => {
    playerRef.current
      ?.getDuration()
      .then((getDuration) => setDuration(getDuration));

    const interval = setInterval(async () => {
      const elapsed_sec = await playerRef.current?.getCurrentTime();

      elapsed_sec && setElapsed(elapsed_sec);
      // console.log('elapsed', elapsed_sec);
      // console.log('duration', duration);
    }, 1000); // 100 ms refresh. increase it if you don't require millisecond precision

    if (!playing) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [playing]);

  React.useEffect(() => {
    console.log('song_id', songId);
    if (songId !== null) {
      setSong({ ...song, track_yt_link: songId });
      // setPlaying(true);
    }
  }, [songId]);

  React.useEffect(() => {
    console.log('albumId', albumId);
    if (albumId !== null) {
      setSong(albumId);
      // setPlaying(true);
    }
  }, [albumId]);

  const getProgress = () => {
    if (song === null || duration === null || elapsed === null) {
      return 0;
    }

    return (elapsed / duration) * 100;
  };

  React.useEffect(() => {
    if (song !== null) {
      Array.isArray(song)
        ? setPlaylist(
            song.map(function (song) {
              if (song['track_yt_link'] !== '19Uh4sth7IQ') {
                return song['track_yt_link'];
              }
            })
          )
        : setPlaylist([song ? song.track_yt_link : '']);
    }
  }, [song]);

  React.useEffect(() => {
    console.log('link has changed, playing...');
    setPlaying(false);
  }, [song.track_yt_link]);

  const onStateChange = React.useCallback((state) => {
    console.log('onStatusChange', state);
    if (state === 'ended') {
      setPlaying(false);
      console.log('video has finished playing!');
    }

    if (state === 'paused') {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = React.useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const skipToNext = () => {
    playerRef.current
      ?.getDuration()
      .then((getDuration) => playerRef.current?.seekTo(getDuration, true));
  };

  if (!song.track_yt_link && !Array.isArray(song)) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${getProgress()}%` }]}></View>
      <View style={styles.row}>
        <View style={styles.playerContainer}>
          <YoutubePlayer
            height={75}
            play={playing}
            playList={playlist}
            ref={playerRef}
            onChangeState={onStateChange}
            videoId={song?.track_yt_link || ''}
            onReady={togglePlaying}
          />
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.details}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
          </View>
        </View>
        <View style={styles.iconsContainer}>
          <AntDesign
            name='hearto'
            size={30}
            color='white'
            onPress={skipToNext}
          />
          <TouchableOpacity onPress={togglePlaying}>
            <FontAwesome
              name={playing ? 'pause' : 'play'}
              size={30}
              color='white'
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
