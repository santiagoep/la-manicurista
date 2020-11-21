class Env {
  static init() {
    this.spotifyApiToken = process.env.SPOTIFY_API_TOKEN;
    this.spotifyRefreshToken = process.env.SPOTIFY_REFRESH_API_TOKEN;
    this.spotifyClientId = process.env.CLIENT_ID;
    this.spotifyClientIdSecret = process.env.CLIENT_ID_SECRET;
  }

  static updateSpotifyApiToken(accessToken) {
    this.spotifyApiToken = accessToken;
  }

  static getInstance() {
    if (this.load) return this;
    this.init();
    return this;
  }
}

export default Env;
