
"use client";

import { useEffect, useRef } from "react";
import { FaceDetector, FilesetResolver } from "@mediapipe/tasks-vision";
import { useInterview } from "@/src/lib/interview/store";

const DETECTION_INTERVAL = 500;

function publishFaceCount(count: number) {
  window.dispatchEvent(
    new CustomEvent("algoforge:face-count", {
      detail: { count },
    }),
  );
}

export default function CameraPip() {
  const { media } = useInterview();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const stream = media.camera;

    if (!video || !stream) return;

    let cancelled = false;
    let detector: FaceDetector | null = null;
    let interval: ReturnType<typeof setInterval> | null = null;

    video.srcObject = stream;

    async function initializeDetection() {
      try {
        const vision = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm",
        );

        if (cancelled) return;

        detector = await FaceDetector.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath:
              "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite",
            delegate: "GPU",
          },
          runningMode: "VIDEO",
          minDetectionConfidence: 0.6,
        });

        if (cancelled) {
          detector.close();
          detector = null;
          return;
        }

        interval = setInterval(() => {
          if (
            cancelled ||
            !detector ||
            !video ||
            video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA
          ) {
            return;
          }

          try {
            const result = detector.detectForVideo(
              video,
              performance.now(),
            );

            publishFaceCount(result.detections.length);
          } catch (error) {
            console.warn("Face detection frame failed:", error);
          }
        }, DETECTION_INTERVAL);
      } catch (error) {
        console.error("Unable to initialize face detection:", error);
      }
    }

    void initializeDetection();

    return () => {
      cancelled = true;

      if (interval) clearInterval(interval);

      detector?.close();
      detector = null;

      publishFaceCount(0);

      if (video) {
        video.srcObject = null;
      }
    };
  }, [media.camera]);

  if (!media.camera) return null;

  return (
    <div className="pointer-events-none fixed bottom-20 right-5 z-40 w-44 overflow-hidden rounded-2xl border border-zinc-700 bg-black shadow-2xl">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="aspect-video w-full object-cover [transform:scaleX(-1)]"
      />

      <div className="absolute left-2 top-2 flex items-center gap-1.5 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
        REC
      </div>

      <div className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-1 text-[9px] font-medium text-white">
        AI monitoring
      </div>
    </div>
  );
}
