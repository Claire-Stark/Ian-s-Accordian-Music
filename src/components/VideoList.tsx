// src/components/VideoList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import CONSTANTS from '../constants/applicationContacts';

interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
  };
}

const VideoList: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual YouTube Data API Key
    const API_KEY = CONSTANTS.API_KEY;
    const CHANNEL_ID = CONSTANTS.CHANNEL_ID;

    // Fetch the user's uploaded videos from their YouTube channel
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
      )
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch((error) => {
        console.error('Error fetching videos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Your Uploaded Videos</h1>
      <div className="video-list">
        {videos.map((video) => (
          <div key={video.id.videoId}>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
            <YouTube videoId={video.id.videoId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
