"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function getStartTime(url: string): number | undefined {
  const match = url.match(/[?&]start=(\d+)/);
  return match ? parseInt(match[1], 10) : undefined;
}

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
  const startTime = getStartTime(url);

  const playerVars: Record<string, string | number | undefined> = {
    rel: 0,
  };
  if (startTime) {
    playerVars.start = startTime;
  }

  const playerConfig = {
    youtube: playerVars,
  } as Record<string, unknown>;

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
        config={playerConfig}
      />
    </div>
  );
}
