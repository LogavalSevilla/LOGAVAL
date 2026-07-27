type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const subtitleColor = variant === "light" ? "text-navy" : "text-cream/90";

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <span className="font-serif text-3xl tracking-[0.15em] text-gold">
        LOGAVAL
      </span>
      <span className="mt-1 h-px w-full bg-gold" />
      <span
        className={`mt-1.5 text-[0.65rem] font-semibold tracking-[0.35em] ${subtitleColor}`}
      >
        EXPORT TRADING
      </span>
    </div>
  );
}
