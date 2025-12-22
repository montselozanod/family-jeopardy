import React, { useState, useRef } from 'react';
import { Category } from '../triviaData';

interface CategoryWheelProps {
  categories: Category[];
  onCategorySelected: (category: Category) => void;
  onClose: () => void;
  disabledCategories: string[];
}

const CategoryWheel: React.FC<CategoryWheelProps> = ({
  categories,
  onCategorySelected,
  onClose,
  disabledCategories
}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const selectedIndexRef = useRef<number>(0);

  // Filter out completed categories
  const availableCategories = categories.filter(
    cat => !disabledCategories.includes(cat.id)
  );

  const segmentAngle = 360 / availableCategories.length;

  const spinWheel = () => {
    if (isSpinning || availableCategories.length === 0) return;

    setIsSpinning(true);
    setSelectedCategory(null);

    // Select random winning segment first
    const winningIndex = Math.floor(Math.random() * availableCategories.length);
    selectedIndexRef.current = winningIndex;

    // Calculate the angle needed to land on this segment
    // The pointer is at the top (0 degrees / 12 o'clock position)
    // Segments are drawn starting from 0 degrees going clockwise
    // We need to rotate so that the middle of the winning segment is at the top
    
    const segmentMiddleAngle = winningIndex * segmentAngle + segmentAngle / 2;
    // To bring this segment to the top (pointer position), we rotate by (360 - segmentMiddleAngle)
    const angleToWinningSegment = 360 - segmentMiddleAngle;
    
    // Add full rotations (4-6 spins) for dramatic effect
    const fullRotations = (4 + Math.floor(Math.random() * 3)) * 360;
    
    const newRotation = rotation + fullRotations + angleToWinningSegment;
    
    setRotation(newRotation);

    // After animation completes, set the selected category
    setTimeout(() => {
      setIsSpinning(false);
      setSelectedCategory(availableCategories[winningIndex]);
    }, 4000);
  };

  const handleSelectCategory = () => {
    if (selectedCategory) {
      onCategorySelected(selectedCategory);
    }
  };

  // Generate wheel segments
  const renderWheelSegments = () => {
    return availableCategories.map((category, index) => {
      const startAngle = index * segmentAngle;
      const endAngle = (index + 1) * segmentAngle;
      
      // Convert to radians for calculations
      const startRad = (startAngle - 90) * (Math.PI / 180);
      const endRad = (endAngle - 90) * (Math.PI / 180);
      
      const radius = 150;
      const centerX = 150;
      const centerY = 150;
      
      // Calculate arc points
      const x1 = centerX + radius * Math.cos(startRad);
      const y1 = centerY + radius * Math.sin(startRad);
      const x2 = centerX + radius * Math.cos(endRad);
      const y2 = centerY + radius * Math.sin(endRad);
      
      // Large arc flag
      const largeArc = segmentAngle > 180 ? 1 : 0;
      
      // Path for the segment
      const path = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;
      
      // Get color from category
      const colorMap: Record<string, string> = {
        'bg-purple-600': '#9333ea',
        'bg-amber-600': '#d97706',
        'bg-pink-600': '#db2777',
        'bg-teal-600': '#0d9488',
        'bg-blue-600': '#2563eb',
        'bg-red-600': '#dc2626'
      };
      
      const fillColor = colorMap[category.color] || '#6366f1';
      
      // Calculate text position (middle of segment)
      const midAngle = ((startAngle + endAngle) / 2 - 90) * (Math.PI / 180);
      const textRadius = radius * 0.65;
      const textX = centerX + textRadius * Math.cos(midAngle);
      const textY = centerY + textRadius * Math.sin(midAngle);
      const textRotation = (startAngle + endAngle) / 2;
      
      // Extract emoji from category name
      const emoji = category.name.split(' ')[0];
      
      return (
        <g key={category.id}>
          <path
            d={path}
            fill={fillColor}
            stroke="white"
            strokeWidth="2"
          />
          <text
            x={textX}
            y={textY}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="24"
            transform={`rotate(${textRotation}, ${textX}, ${textY})`}
          >
            {emoji}
          </text>
        </g>
      );
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 rounded-3xl p-8 max-w-lg w-full shadow-2xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white mb-2">🎰 Ruleta de Categorías</h2>
          <p className="text-yellow-200">¡Gira la ruleta para elegir la categoría!</p>
        </div>

        {availableCategories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-2xl text-white mb-4">¡Todas las categorías han sido completadas! 🎉</p>
            <button
              onClick={onClose}
              className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-xl"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <>
            {/* Wheel Container */}
            <div className="relative flex justify-center mb-8">
              {/* Pointer */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
                <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[30px] border-t-yellow-400 drop-shadow-lg" />
              </div>
              
              {/* Wheel */}
              <div
                className="relative"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: isSpinning ? 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none'
                }}
              >
                <svg width="300" height="300" viewBox="0 0 300 300">
                  {renderWheelSegments()}
                  {/* Center circle */}
                  <circle cx="150" cy="150" r="25" fill="white" />
                  <circle cx="150" cy="150" r="20" fill="#1e1b4b" />
                </svg>
              </div>
            </div>

            {/* Selected Category Display */}
            {selectedCategory && !isSpinning && (
              <div className="bg-white/20 rounded-2xl p-6 mb-6 text-center animate-pulse">
                <p className="text-lg text-yellow-200 mb-2">¡La ruleta eligió!</p>
                <p className="text-3xl font-bold text-white">{selectedCategory.name}</p>
              </div>
            )}

            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {availableCategories.map(category => (
                <div
                  key={category.id}
                  className={`${category.color} rounded-lg px-3 py-2 text-white text-sm font-medium truncate ${
                    selectedCategory?.id === category.id ? 'ring-4 ring-yellow-400' : ''
                  }`}
                >
                  {category.name}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-6 rounded-xl transition-all"
              >
                Cancelar
              </button>
              {!selectedCategory ? (
                <button
                  onClick={spinWheel}
                  disabled={isSpinning}
                  className={`flex-1 bg-yellow-400 hover:bg-yellow-300 text-gray-800 font-bold py-4 px-6 rounded-xl transition-all ${
                    isSpinning ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-105'
                  }`}
                >
                  {isSpinning ? '🎰 Girando...' : '🎲 ¡Girar!'}
                </button>
              ) : (
                <button
                  onClick={handleSelectCategory}
                  className="flex-1 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105"
                >
                  ¡Jugar esta categoría! ✓
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryWheel;
