export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 active:scale-95 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-secondary text-surface shadow-[0_0_15px_rgba(197,157,95,0.3)] hover:shadow-[0_8_25px_rgba(197,157,95,0.5)] hover:bg-secondary/90 focus:ring-secondary/50",
    outline: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-surface hover:shadow-lg focus:ring-primary/50",
    ghost: "bg-surface/10 backdrop-blur-md text-surface border border-surface/30 hover:bg-surface/20 hover:shadow-lg focus:ring-surface/50"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
