"use client";

import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

export default function ProductShowcaseVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  return (
    <section className="section product-video-section">
      <div className="container product-video-grid">
        <div className="product-video-copy">
          <span className="eyebrow">PACK INDIA IN MOTION</span>
          <h2>
            PACKAGING MADE FOR <span className="orange">PERFORMANCE</span>
          </h2>
          <p>
            See a selection of Pack India products designed to protect,
            secure and support dependable delivery.
          </p>
        </div>
        <div className="product-video-frame">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/pack-india-product-showcase.mp4" type="video/mp4" />
            Your browser does not support video playback.
          </video>
          <button
            className="video-play-toggle"
            type="button"
            onClick={togglePlayback}
            aria-label={isPlaying ? "Pause product video" : "Play product video"}
          >
            {isPlaying ? <Pause size={17} /> : <Play size={17} />}
            {isPlaying ? "PAUSE" : "PLAY"}
          </button>
        </div>
      </div>
    </section>
  );
}
