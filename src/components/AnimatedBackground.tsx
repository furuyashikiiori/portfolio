"use client";

interface AnimatedBackgroundProps {
  variant?: 'hero' | 'section' | 'subtle';
  children: React.ReactNode;
}

export default function AnimatedBackground({ variant = 'section', children }: AnimatedBackgroundProps) {
  const getBackgroundClasses = () => {
    switch (variant) {
      case 'hero':
        return 'bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100';
      case 'section':
        return 'bg-gradient-to-r from-cyan-25 via-blue-25 to-slate-50';
      case 'subtle':
        return 'bg-gradient-to-b from-white via-cyan-25 to-blue-25';
      default:
        return 'bg-gradient-to-r from-cyan-25 via-blue-25 to-slate-50';
    }
  };

  const getWaveIntensity = () => {
    switch (variant) {
      case 'hero':
        return 'animate-wave-slow';
      case 'section':
        return 'animate-wave-medium';
      case 'subtle':
        return 'animate-wave-gentle';
      default:
        return 'animate-wave-medium';
    }
  };

  return (
    <div className={`relative ${getBackgroundClasses()} overflow-hidden`}>
      {/* Animated Wave Layers */}
      <div className="absolute inset-0 opacity-30">
        {/* Wave 1 */}
        <div 
          className={`absolute inset-0 ${getWaveIntensity()}`}
          style={{
            background: `radial-gradient(ellipse 80% 50% at 20% 40%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
                        radial-gradient(ellipse 60% 80% at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)`
          }}
        />
        
        {/* Wave 2 */}
        <div 
          className={`absolute inset-0 ${getWaveIntensity()}`}
          style={{
            background: `radial-gradient(ellipse 70% 60% at 70% 60%, rgba(14, 165, 233, 0.06) 0%, transparent 50%),
                        radial-gradient(ellipse 50% 70% at 30% 80%, rgba(99, 102, 241, 0.04) 0%, transparent 50%)`,
            animationDelay: '-1.5s'
          }}
        />
        
        {/* Wave 3 */}
        <div 
          className={`absolute inset-0 ${getWaveIntensity()}`}
          style={{
            background: `radial-gradient(ellipse 90% 40% at 50% 20%, rgba(34, 197, 94, 0.03) 0%, transparent 50%),
                        radial-gradient(ellipse 40% 90% at 10% 50%, rgba(168, 85, 247, 0.02) 0%, transparent 50%)`,
            animationDelay: '-3s'
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}