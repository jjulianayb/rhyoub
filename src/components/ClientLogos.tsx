const clients = [
  "ArcelorMittal",
  "Grupo Minerita",
  "Grupo Herculano",
  "ELV",
  "Faminas",
  "Fundação Cristiano Varella",
  "Unimed",
  "Itaú",
  "Sartori",
  "BrMalls",
  "Multivision",
];

const ClientLogos = () => {
  return (
    <section className="py-14 px-6 md:px-8 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto mb-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Empresas que confiam na youB
        </p>
      </div>

      {/* Marquee wrapper */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[hsl(var(--secondary)/0.3)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[hsl(var(--secondary)/0.3)] to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Duplicate the list twice for seamless loop */}
          {[...clients, ...clients].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="inline-flex items-center mx-8 md:mx-12 text-lg md:text-xl font-bold text-muted-foreground/40 select-none shrink-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
