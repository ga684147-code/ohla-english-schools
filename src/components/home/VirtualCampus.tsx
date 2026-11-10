import styles from "./VirtualCampus.module.css";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { routes } from "@/config/routes";
export function VirtualCampus({ videoSrc }: { videoSrc?: string }) {
  return (
    <section
      className={`${styles.section} virtual-campus content-container`}
      id="virtual-campus"
      aria-labelledby="virtual-title"
    >
      <div className="virtual-copy">
        <h2 id="virtual-title">Virtual Campus</h2>
        <h3>A classroom experience<br />wherever you are</h3>
        <h4>Live interactive classes with<br />OHLA-certified teachers!</h4>
        <p>
          Our award-winning English program is now available online! Join live
          interactive classes with OHLA specialist teachers using our
          state-of-the-art hybrid platform.
        </p>
        <div className="button-row">
          <Button href={routes.apply}>Apply now</Button>
          <Button href={routes.studyOnline} variant="outline">
            Learn more
          </Button>
        </div>
      </div>
      <figure className="virtual-media">
        {videoSrc ? <video controls playsInline preload="none" width={640} height={360} poster="/images/virtual-campus-poster.jpg" aria-label="OHLA Virtual Campus presentation"><source src={videoSrc} type="video/mp4" />Your browser does not support this video. <a href={videoSrc}>Download the video</a>.</video> : <Photo
          name="virtual"
          alt="OHLA Online Campus presentation preview"
          sizes="(max-width:699px) 100vw,45vw"
        />}
      </figure>
    </section>
  );
}
