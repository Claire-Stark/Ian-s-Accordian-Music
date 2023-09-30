// src/components/VideoGrid.tsx
import React from 'react';
import YouTube from 'react-youtube';

interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
  };
}

interface VideoGridProps {
  videos: Video[];
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
    // Define the aspect ratio (16:9) and the number of columns in the grid
    const aspectRatio = 16 / 9;
    
    return (
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-item" >
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
            <YouTube
              videoId={video.id.videoId}
              // Calculate the height based on the width and aspect ratio
              className="video-container"
              opts={{
                width: '100%',
                height: `${100 / aspectRatio}%`,
              }}
            />
          </div>
        ))}
      </div>
    );
  };

export default VideoGrid;
