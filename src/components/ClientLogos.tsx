import itauLogo from "@/assets/logos/itau.png";

interface Client {
  name: string;
  logo?: string;
}

const clients: Client[] = [
  { name: "ArcelorMittal" },
  { name: "Grupo Minerita" },
  { name: "Grupo Herculano" },
  { name: "ELV" },
  { name: "Faminas" },
  { name: "Fundação Cristiano Varella" },
  { name: "Unimed" },
  { name: "Itaú", logo: itauLogo },
  { name: "Sartori" },
  { name: "BrMalls" },
  { name: "Multivision" },
];

const ClientLogos = () => {
  const doubled = [...clients, ...clients];

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
          {doubled.map((client, i) => (
            <span
              key={`${client.name}-${i}`}
              className="inline-flex items-center mx-8 md:mx-12 shrink-0 select-none"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-8 md:h-10 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              ) : (
                <span className="text-lg md:text-xl font-bold text-muted-foreground/40">
                  {client.name}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
