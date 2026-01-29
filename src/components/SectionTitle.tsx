interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionTitleProps) => {
  return (
    <div className={`mb-8 sm:mb-10 md:mb-12 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <span
          className={`font-subtitle text-xs sm:text-sm uppercase tracking-wider ${
            light ? "text-primary-foreground/80" : "text-primary"
          } font-semibold`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 sm:mt-3 leading-tight ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`font-body text-sm sm:text-base mt-3 sm:mt-4 md:mt-5 max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-primary-foreground/80" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
