const clients = [
  "ArcelorMittal",
  "Grupo Minerita",
  "Grupo Herculano",
  "ELV",
  "Centro Universitário Faminas",
  "Fundação Cristiano Varella",
  "Unimed",
  "Itaú",
  "Sartori",
  "BrMalls",
  "Multivision",
];

const ClientLogos = () => {
  return (
    <section className="py-16 px-6 md:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-10">
          Empresas que confiam na youB
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
          {clients.map((name) => (
            <span
              key={name}
              className="text-sm md:text-base font-bold text-muted-foreground/60 hover:text-primary transition-colors duration-300 whitespace-nowrap"
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
