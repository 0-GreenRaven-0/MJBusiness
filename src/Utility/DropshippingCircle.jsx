import { useState, useEffect } from 'react';
import { FiPackage, FiShoppingCart, FiTruck, FiDollarSign } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';

export default function DropshippingCircle() {
  const [dotRotation, setDotRotation] = useState(0);
  const [activeIcon, setActiveIcon] = useState(null);
  const isTablet = useMediaQuery({ minWidth: 768 })
  const isDesktop = useMediaQuery({ minWidth: 1280 })
  
  // Icons configuration with their positions (in degrees)
  const icons = [
    { Icon: FiPackage, position: 0, label: 'Product', id: 0 },
    { Icon: FiShoppingCart, position: 90, label: 'Order', id: 1 },
    { Icon: FiTruck, position: 180, label: 'Shipping', id: 2 },
    { Icon: FiDollarSign, position: 270, label: 'Sales', id: 3 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDotRotation(prev => {
        const newRotation = (prev + 1) % 360;
        
        // Check if dot is near any icon (within 10 degrees)
        icons.forEach(icon => {
          const diff = Math.abs(newRotation - icon.position);
          const wrappedDiff = Math.min(diff, 360 - diff);
          
          if (wrappedDiff < 10) {
            setActiveIcon(icon.id);
          }
        });
        
        return newRotation;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center py-15 md:py-25 xl:py-0">
      <div className="relative w-70 h-70 md:w-140 md:h-140 xl:w-80 xl:h-80">
        {/* Circular border */}
        <div className="absolute inset-0 rounded-full border-4 border-slate-600"></div>
        
        {/* Traveling dot */}
        <div 
          className="absolute w-full h-full"
          style={{ transform: `rotate(${dotRotation}deg)` }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
        </div>

        {/* Icons */}
        {icons.map(({ Icon, position, label, id }) => {
          const angle = (position - 90) * (Math.PI / 180);
          let radius = isDesktop ? 150 : isTablet ? 255 : 135;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          
          return (
            <div
              key={id}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
              }}
            >
              <div className={`
                relative flex flex-col items-center gap-2
                transition-all duration-300
                ${activeIcon === id ? 'scale-125' : 'scale-100'}
              `}>
                <div className={`
                  p-4 rounded-full bg-slate-700 border-2 border-slate-500
                  transition-all duration-300
                  ${activeIcon === id ? 'bg-blue-600 border-blue-400 shadow-lg shadow-blue-500/50 animate-pulse' : ''}
                `}>
                  <Icon className="w-6 h-6 md:w-20 md:h-20 xl:w-6 xl:h-6 text-white" />
                </div>
                <span className="text-sm md:text-3xl xl:text-sm font-medium text-slate-300">{label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}