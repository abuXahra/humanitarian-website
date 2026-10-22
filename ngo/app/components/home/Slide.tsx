"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import Button from "../button/Button";
import { SLIDES } from "@/app/data/home/SliderData";

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 30,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  /*
   * Previous slide
   */
  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  /*
   * Next slide
   */
  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  /*
   * Update active slide
   */
  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  /*
   * Subscribe to Embla
   */
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-[600px] w-full overflow-hidden sm:h-[650px] lg:h-[700px]">
      {/* =========================================
          SLIDER VIEWPORT
      ========================================== */}
      <div ref={emblaRef} className="h-full w-full overflow-hidden">
        {/* =========================================
            SLIDES CONTAINER
        ========================================== */}
        <div className="flex h-full">
          {SLIDES.map((slide, index) => {
            const isActive = selectedIndex === index;

            return (
              <div
                key={slide.id}
                className="relative h-full min-w-0 flex-[0_0_100%] overflow-hidden "
              >
                {/* =========================================
                    BACKGROUND IMAGE
                ========================================== */}

                <div
                  className={`absolute inset-0 ${
                    isActive ? "hero-image-zoom" : ""
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>

                {/* =========================================
                    DARK OVERLAY
                ========================================== */}

                <div className="absolute inset-0 bg-black/50" />

                {/* =========================================
                    CONTENT
                ========================================== */}

                <div className="relative z-10 flex h-full items-center">
                  <div className="mx-auto w-full max-w-7xl px-10 sm:px-8 lg:px-20">
                    <div className="max-w-3xl text-white">
                      {/* Subtitle */}
                      <div
                        className={
                          isActive
                            ? "hero-content-slide hero-delay-1"
                            : "opacity-0"
                        }
                      >
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] sm:text-base">
                          {slide.subtitle}
                        </p>
                      </div>

                      {/* Title */}
                      <div
                        className={
                          isActive
                            ? "hero-content-slide hero-delay-2"
                            : "opacity-0"
                        }
                      >
                        <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
                          {slide.title}
                        </h1>
                      </div>

                      {/* Description */}
                      <div
                        className={
                          isActive
                            ? "hero-content-slide hero-delay-3"
                            : "opacity-0"
                        }
                      >
                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                          {slide.description}
                        </p>
                      </div>

                      {/* Button */}
                      <div
                        className={
                          isActive
                            ? "hero-content-slide hero-delay-4"
                            : "opacity-0"
                        }
                      >
                        <Button text={slide.btnText} onClick={() => {}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================
          PREVIOUS BUTTON
      ========================================== */}

      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 z-20 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-lg text-white backdrop-blur-md transition hover:bg-white/40 sm:left-6 sm:h-12 sm:w-12"
      >
        ←
      </button>

      {/* =========================================
          NEXT BUTTON
      ========================================== */}

      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 z-20 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-xsm text-white backdrop-blur-md transition hover:bg-white/40 sm:right-6 sm:h-12 sm:w-12"
      >
        →
      </button>

      {/* =========================================
          DOTS
      ========================================== */}

      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-10">
        {SLIDES.map((slide, index) => {
          const isActive = selectedIndex === index;

          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
