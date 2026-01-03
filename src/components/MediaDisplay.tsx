import React from 'react';
import type { MediaContent } from '../triviaData';

interface MediaDisplayProps {
  media: MediaContent;
  className?: string;
}

const MediaDisplay: React.FC<MediaDisplayProps> = ({ media, className = '' }) => {
  const containerClass = `rounded-2xl overflow-hidden shadow-lg ${className}`;

  // Extract YouTube video ID from various URL formats
  const getYouTubeId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/ // Direct video ID
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  switch (media.type) {
    case 'image':
      return (
        <div className={containerClass}>
          <img
            src={media.url}
            alt={media.caption || 'Imagen de la pregunta'}
            className="w-full h-auto max-h-96 object-contain bg-black/10"
          />
          {media.caption && (
            <p className="text-center text-gray-600 text-sm py-2 px-4 bg-gray-100">
              {media.caption}
            </p>
          )}
        </div>
      );

    case 'video':
      return (
        <div className={containerClass}>
          <video
            src={media.url}
            controls
            className="w-full max-h-96"
            preload="metadata"
          >
            Tu navegador no soporta el elemento de video.
          </video>
          {media.caption && (
            <p className="text-center text-gray-600 text-sm py-2 px-4 bg-gray-100">
              {media.caption}
            </p>
          )}
        </div>
      );

    case 'youtube': {
      const videoId = getYouTubeId(media.url);
      if (!videoId) {
        return (
          <div className={`${containerClass} p-4 bg-red-100 text-red-600`}>
            URL de YouTube inválida
          </div>
        );
      }
      
      return (
        <div className={containerClass}>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={media.caption || 'Video de YouTube'}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {media.caption && (
            <p className="text-center text-gray-600 text-sm py-2 px-4 bg-gray-100">
              {media.caption}
            </p>
          )}
        </div>
      );
    }

    default:
      return null;
  }
};

export default MediaDisplay;
