export default function SectionHeader({ title, subtitle, className = '', align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : align === 'left' ? 'text-left' : 'text-right';
  
  return (
    <div className={`mb-16 ${alignClass} ${className}`}>
      <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg max-w-2xl leading-relaxed font-light mt-4 mx-auto opacity-80">
          {subtitle}
        </p>
      )}
    </div>
  );
}
