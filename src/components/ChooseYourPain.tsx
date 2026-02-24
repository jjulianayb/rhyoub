import { motion, useInView } from "framer-motion";
import { useRef, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { solutions } from "@/data/solutions";

const ChooseYourPain = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const navigate = useNavigate();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    dragFree: true,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedSnap(emblaApi.selectedScrollSnap());
    setSnapCount(emblaApi.scrollSnapList().length);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="escolha-dor" ref={ref} className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Educação</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Conheça nossas soluções
          </h2>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            Geração de valor no ecossistema de negócios. A youB desenvolve soluções educacionais para os desafios que você e sua empresa se deparam, com metodologia única.
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary/90 transition-all"
            aria-label="Anterior"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary/90 transition-all"
            aria-label="Próximo"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Carousel viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {solutions.map((sol, i) => (
                <div
                  key={sol.slug}
                  className="flex-[0_0_85%] sm:flex-[0_0_46%] lg:flex-[0_0_31%] min-w-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    onClick={() => navigate(`/${sol.slug}`)}
                    role="button"
                    tabIndex={0}
                    className="group relative rounded-3xl overflow-hidden w-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_hsl(var(--primary)/0.3)] shadow-lg"
                    style={{ height: 480 }}
                  >
                    {/* Full image background */}
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Purple gradient overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[hsl(var(--primary))] via-[hsl(var(--primary)/0.5)] to-transparent" />

                    {/* Tags at top */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                      {sol.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-semibold uppercase tracking-wider text-primary-foreground bg-primary/80 backdrop-blur-sm px-3 py-1.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <h3 className="text-xl font-bold text-white leading-snug drop-shadow-lg">
                        {sol.title}
                      </h3>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: snapCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === selectedSnap
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseYourPain;
