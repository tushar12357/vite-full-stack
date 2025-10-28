interface FloatingShapesProps {
  count?: number;
  theme?: 'light' | 'dark' | 'color';
}

export const FloatingShapes = ({ count = 6, theme = 'light' }: FloatingShapesProps) => {
  const shapes = Array.from({ length: count }, (_, i) => i);
  
  const getShapeColor = () => {
    if (theme === 'dark') return 'rgba(255, 255, 255, 0.05)';
    if (theme === 'color') {
      const colors = [
        'rgba(99, 102, 241, 0.1)',
        'rgba(6, 182, 212, 0.1)',
        'rgba(139, 92, 246, 0.1)',
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
    return 'rgba(99, 102, 241, 0.08)';
  };

  const getShapeType = (index: number) => {
    const types = ['circle', 'square', 'triangle'];
    return types[index % types.length];
  };

  const getSize = () => {
    const sizes = [40, 60, 80, 100];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((_, index) => {
        const size = getSize();
        const shapeType = getShapeType(index);
        const color = getShapeColor();
        const animationDelay = `${index * 2}s`;
        const animationDuration = `${15 + index * 3}s`;
        const left = `${5 + (index * 15) % 85}%`;
        const top = `${10 + (index * 20) % 70}%`;
        
        return (
          <div
            key={index}
            className="absolute"
            style={{
              left,
              top,
              width: `${size}px`,
              height: `${size}px`,
              border: `2px solid ${color}`,
              borderRadius: shapeType === 'circle' ? '50%' : shapeType === 'square' ? '8px' : '0',
              transform: shapeType === 'triangle' ? 'rotate(45deg)' : 'none',
              animation: index % 2 === 0 
                ? `float ${animationDuration} ease-in-out infinite`
                : `float-alt ${animationDuration} ease-in-out infinite`,
              animationDelay,
            }}
          />
        );
      })}
    </div>
  );
};
