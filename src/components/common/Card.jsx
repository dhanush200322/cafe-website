export default function Card({ children, className = '', hover = true }) {
  const baseStyles = "bg-surface rounded-2xl overflow-hidden shadow-sm border border-secondary/10";
  const hoverStyles = hover ? "hover:shadow-[0_20px_40px_-15px_rgba(44,30,22,0.1)] hover:-translate-y-2 transition-all duration-500 group" : "";
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
