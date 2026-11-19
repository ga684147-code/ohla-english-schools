"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import { Photo } from "@/components/ui/Photo";
import styles from "./Campuses.module.css";

export function CampusVideo({ name, videoId, poster }: {
  name: string;
  videoId: string;
  poster?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const title = `OHLA ${name} campus tour`;
  const url = `https://www.youtube.com/watch?v=${videoId}`;
  return (
    <div className={styles.video}>
      {playing ? <>
        <iframe title={title} src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
        <a className={styles.videoLink} href={url} target="_blank" rel="noreferrer">Watch on YouTube</a>
      </> : (
        <a className={styles.play} href={url} aria-label={`Play ${title}`}
          onClick={event => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            event.preventDefault();
            setPlaying(true);
          }}>
          {poster && <Photo name={`campuses/${poster}`} sizes="(max-width: 740px) 92vw, 34vw" />}
          <span><Play size={25} fill="currentColor" aria-hidden="true" /></span>
        </a>
      )}
    </div>
  );
}
