export const REACT_APP_GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_API =
  `https://www.googleapis.com/youtube/v3/videos?` +
  `part=snippet,statistics&` +
  `chart=mostPopular&` +
  `regionCode=IN&` +
  `maxResults=20&` +
  `key=${REACT_APP_GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;
