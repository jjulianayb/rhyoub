import { ArrowRight, ExternalLink } from "lucide-react";

interface MediaBlockProps {
  title: string;
  text: string;
  links: { label: string; url: string; isButton?: boolean }[];
}

const MediaBlock = ({ title, text, links }: MediaBlockProps) => {
  return (
    <div className="glass-card p-8 md:p-10">
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-5">{text}</p>
      <div className="flex flex-col gap-3">
        {links.map((link) =>
          link.isButton ? (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/20 w-fit"
            >
              {link.label}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          ) : (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
            >
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              {link.label}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default MediaBlock;
