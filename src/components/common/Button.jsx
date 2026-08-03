export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 active:scale-95 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-secondary text-surface relative overflow-hidden group hover:shadow-premium hover:bg-secondary/95 focus:ring-secondary/50 after:absolute after:inset-0 after:bg-white/10 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-500",
    outline: "bg-transparent text-primary border border-primary/20 hover:border-primary hover:bg-primary/5 hover:shadow-sm focus:ring-primary/50",
    ghost: "bg-surface/5 backdrop-blur-md text-surface border border-surface/20 hover:bg-surface/10 hover:shadow-premium focus:ring-surface/50"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
