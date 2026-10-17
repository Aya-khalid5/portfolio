interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-xl text-center"
          : "max-w-xl"
      }
    >
      <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-ink-soft">
          {description}
        </p>
      )}
    </div>
  );
}
