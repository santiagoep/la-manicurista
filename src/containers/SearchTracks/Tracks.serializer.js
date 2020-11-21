const serializeArtists = (artists) =>
  artists.map(({ name }) => ({
    name,
  }));

const serializeTracks = (tracks) =>
  tracks.map(({ artists, album, preview_url, name }) => ({
    name,
    imgPreviews: {
      small: {
        src: album?.images[2]?.url,
        alt: name,
      },
      medium: { src: album?.images[1]?.url, alt: name },
      large: { src: album?.images[0]?.url, alt: name },
    },
    preview: preview_url,
    artists: serializeArtists(artists),
  }));

export default serializeTracks;
