"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export interface VideoEmbedProps {
  url: string;
  playing?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
}

export default function VideoEmbed({
  url,
  playing = false,
  onPlay,
  onPause,
}: VideoEmbedProps) {
  return (
    <div className="absolute inset-0 w-full h-full">
      <ReactPlayer
        src={url}
        width="100%"
        height="100%"
        controls
        playing={playing}
        onPlay={onPlay}
        onPause={onPause}
        config={{
          youtube: {
            rel: 0,
          },
        }}
      />
    </div>
  );
}
