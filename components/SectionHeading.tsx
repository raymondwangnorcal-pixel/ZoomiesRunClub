type SectionHeadingProps = {
  id?: string;
  kicker?: string;
  title: string;
  children?: React.ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  kicker,
  title,
  children,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {kicker ? (
        <p className="mb-3 text-sm font-extrabold uppercase tracking-normal text-zoomies-gray">
          {kicker}
        </p>
      ) : null}
      <h2
        id={id}
        className="text-balance text-3xl font-black leading-[1.02] tracking-normal text-zoomies-charcoal sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {children ? (
        <div className="mt-5 text-pretty text-base leading-8 text-zoomies-charcoal/75 sm:text-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
}
