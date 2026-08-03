export default function Card({ children, className = '', hover = true }) {
  const baseStyles = "bg-surface rounded-2xl overflow-hidden shadow-sm border border-secondary/5";
  const hoverStyles = hover ? "hover:shadow-premium hover:-translate-y-2 transition-all duration-700 group" : "";
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
