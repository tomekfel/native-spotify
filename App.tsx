import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import PlayerWidget from './components/PlayerWidget';
import { Album } from './types';

import { AppContext } from './AppContext';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [songId, setSongId] = React.useState<
    | {
        artist: string;
        id: string;
        title: string;
        track_yt_link: string;
      }
    | any
  >(null);
  const [albumId, setAlbumId] = React.useState<any>(null);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider
          value={{
            albumId,
            songId,
            setSongId: (id) => setSongId(id),
            setAlbumId: (id) => setAlbumId(id),
          }}
        >
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <PlayerWidget />
        </AppContext.Provider>
      </SafeAreaProvider>
    );
  }
}
