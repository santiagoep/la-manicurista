const serializeArtists = (artists) =>
  artists.map(({ name }) => ({
    name,
  }));

const serializeTracks = (tracks) =>
  tracks.map(({ artists, album, preview_url, name }) => ({
    name,
    imgPreview: {
      src: album?.images[2]?.url,
      alt: name,
    },
    preview: preview_url,
    artists: serializeArtists(artists),
  }));

export default serializeTracks;
