const buildArtistStr = (artists) =>
  artists.reduce((acc, curr, index) => {
    if (index + 1 < artists.length) {
      acc += `${curr.name} & `;
    } else {
      acc += curr.name;
    }
    return acc;
  }, "");

export default buildArtistStr;
