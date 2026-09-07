"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Volume2,
  VolumeX,
} from "lucide-react";

const memes = [
  "/memes/meme-01.mp4",
  "/memes/meme-02.mp4",
  "/memes/meme-03.mp4",
  "/memes/meme-04.mp4",
];

const TRANSITION_MS = 700;

export default function MemeFeed() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [muted, setMuted] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Refs mirror state so wheel/keyboard/observer callbacks
  // always read the *current* value without needing to be
  // re-created (and re-attached) on every index change.
  const activeIndexRef = useRef(0);
  const isLocked = useRef(false);
  const unlockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const maxIndex = memes.length;

  /*
   * Move exactly ONE screen at a time.
   * Reads/writes through refs so it never goes stale and
   * never needs to be re-created.
   */
  const moveTo = useCallback((nextIndex: number) => {
    const container = containerRef.current;
    if (!container) return;

    const targetIndex = Math.max(0, Math.min(nextIndex, maxIndex));

    if (targetIndex === activeIndexRef.current) return;
    if (isLocked.current) return;

    const height = container.clientHeight;

    activeIndexRef.current = targetIndex;
    isLocked.current = true;
    setActiveIndex(targetIndex);

    container.scrollTo({
      top: targetIndex * height,
      behavior: "smooth",
    });

    if (unlockTimer.current) clearTimeout(unlockTimer.current);
    unlockTimer.current = setTimeout(() => {
      isLocked.current = false;
    }, TRANSITION_MS);
  }, [maxIndex]);

  /*
   * Native (non-passive) wheel listener.
   *
   * React's onWheel is attached as a PASSIVE listener under
   * the hood, so event.preventDefault() inside a JSX onWheel
   * handler is silently ignored by the browser — the native
   * scroll still happens underneath your JS scroll, and the
   * two fight each other after the very first gesture. Adding
   * the listener manually with { passive: false } is what
   * actually lets preventDefault() take effect.
   */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let wheelCooldown = false;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      if (isLocked.current || wheelCooldown) return;

      const delta = event.deltaY;
      if (Math.abs(delta) < 12) return;

      wheelCooldown = true;
      // Trackpads fire dozens of wheel events per gesture;
      // this collapses a whole gesture into a single step.
      setTimeout(() => {
        wheelCooldown = false;
      }, 60);

      if (delta > 0) {
        moveTo(activeIndexRef.current + 1);
      } else {
        moveTo(activeIndexRef.current - 1);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [moveTo]);

  /*
   * Set initial scroll position once on mount.
   */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollTop = activeIndexRef.current * container.clientHeight;
  }, []);

  /*
   * Detect the visible video. Created ONCE (not tied to
   * activeIndex) so it doesn't get torn down and re-observed
   * mid-transition, which was another source of dropped events.
   */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll("[data-meme]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const index = Number((visible.target as HTMLElement).dataset.meme);

        if (index !== activeIndexRef.current && !isLocked.current) {
          activeIndexRef.current = index;
          setActiveIndex(index);
        }
      },
      {
        root: container,
        threshold: [0.6, 0.75, 0.9],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /*
   * Play only the active video.
   */
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      video.muted = muted;

      if (index === activeIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex, muted]);

  /*
   * Keyboard support.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;

      event.preventDefault();
      if (isLocked.current) return;

      if (event.key === "ArrowDown") {
        moveTo(activeIndexRef.current + 1);
      } else {
        moveTo(activeIndexRef.current - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [moveTo]);

  /*
   * Cleanup.
   */
  useEffect(() => {
    return () => {
      if (unlockTimer.current) clearTimeout(unlockTimer.current);
    };
  }, []);

  return (
    <div className="relative h-full w-full">

      {/* FEED */}

      <div
        ref={containerRef}
        className="
          h-full
          w-full
          snap-y
          snap-mandatory
          overflow-y-auto
          overscroll-none
          touch-pan-y
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >

        {/* MEMES */}

        {memes.map((src, index) => (
          <section
            key={src}
            data-meme={index}
            className="
              relative
              h-full
              w-full
              shrink-0
              snap-start
              snap-always
              overflow-hidden
              bg-zinc-950
            "
          >

            <video
              ref={(element) => {
                videoRefs.current[index] = element;
              }}
              src={src}
              muted={muted}
              loop
              playsInline
              preload={index <= activeIndex + 1 ? "auto" : "metadata"}
              className="h-full w-full object-cover"
            />

            {/* GRADIENT */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-transparent
                to-black/20
              "
            />

            {/* TOP */}

            <div
              className="
                absolute
                left-4
                right-4
                top-12
                z-10
                flex
                items-center
                justify-between
              "
            >

              <div
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-black/30
                  px-3
                  py-1.5
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-white/80
                  backdrop-blur-md
                "
              >
                AlgoForge
              </div>

              <div
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-black/30
                  px-2.5
                  py-1
                  text-[10px]
                  text-white/70
                  backdrop-blur-md
                "
              >
                {index + 1} / {memes.length}
              </div>

            </div>

            {/* BOTTOM */}

            <div className="absolute bottom-7 left-4 right-4 z-10">

              <div className="flex items-end justify-between gap-3">

                <div>

                

                </div>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setMuted((value) => !value);
                  }}
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-black/30
                    text-white
                    backdrop-blur-md
                    transition
                    hover:bg-black/50
                  "
                  aria-label={muted ? "Unmute" : "Mute"}
                >
                  {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </button>

              </div>

            </div>

          </section>
        ))}

        {/* END */}

        <section
          data-meme={memes.length}
          className="
            flex
            h-full
            w-full
            shrink-0
            snap-start
            items-center
            justify-center
            bg-zinc-950
            px-8
            text-center
          "
        >
          <div>
            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-[#FF9324]/10
                text-2xl
              "
            />
          </div>
        </section>

      </div>

    </div>
  );
}