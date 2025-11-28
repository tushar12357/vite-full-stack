interface GradientOrbsProps {
  count?: number;
  colors?: string[];
}

export const GradientOrbs = ({ 
  count = 3, 
  colors = ['#6366F1', '#06B6D4', '#8B5CF6'] 
}: GradientOrbsProps) => {
  const orbs = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((_, index) => {
        const size = 400 + index * 100;
        const color = colors[index % colors.length];
        const animationDelay = `${index * 5}s`;
        const animationDuration = `${20 + index * 5}s`;
        const positions = [
          { top: '-10%', right: '-5%' },
          { bottom: '-10%', left: '-5%' },
          { top: '40%', right: '20%' },
        ];
        const position = positions[index % positions.length];

        return (
          <div
            key={index}
            className="absolute rounded-full"
            style={{
              ...position,
              width: `${size}px`,
              height: `${size}px`,
              background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
              filter: 'blur(80px)',
              animation: `mesh-float ${animationDuration} ease-in-out infinite`,
              animationDelay,
            }}
          />
        );
      })}
    </div>
  );
};
