// src/components/VideoList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CONSTANTS from '../constants/applicationContacts';
import VideoGrid from './VideoGrid';

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
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`
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
      <h1>Video Library</h1>
      <VideoGrid videos={videos} />
    </div>
  );
};

export default VideoList;
