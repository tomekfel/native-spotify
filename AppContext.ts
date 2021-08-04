import React from 'react';

const context = {
  songId: null,
  albumId: null,
  setSongId: (id: any) => {},
  setAlbumId: (id: any) => {},
};

export const AppContext = React.createContext(context);
