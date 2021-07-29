/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  'Your Library': undefined;
  Premium: undefined;
  Search: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  AlbumScreen: undefined;
  SongScreen: undefined;
  PlayerScreen: undefined;
};

export type LibraryParamList = {
  LibraryScreen: undefined;
};
export type PremiumParamList = {
  PremiumScreen: undefined;
};
export type SearchParamList = {
  SearchScreen: undefined;
};

export type Album = {
  id: string;
  imageUri: string;
  artist: string;
  title: string;
  track_yt_link: string;
};
