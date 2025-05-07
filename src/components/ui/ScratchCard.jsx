import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useTheme } from '../../providers/ThemeProvider';
import { cn } from "@/lib/utils";

export const ScratchCard = ({
  className,
  width = 300,
  height = 150,
  brushSize = 20,
  coverImage,
  coverColor,
  revealImage,
  revealContent,
  completionThreshold = 70,
  onComplete,
  disabled = false,
  revealAll = false,
  theme: themeProp,
  variant = "default",
  ...props
}) => {
  // Get theme context
  const { themeObject, theme: contextTheme } = useTheme();
  const activeTheme = themeProp || contextTheme;
  
  // Refs
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isDrawingRef = useRef(false);
  
  // State
  const [isRevealed, setIsRevealed] = useState(false);
  const [percentScratched, setPercentScratched] = useState(0);
  const [lastPoint, setLastPoint] = useState(null);
  const [canvasContext, setCanvasContext] = useState(null);
  
  // Theme-specific style values
  const getThemeStyles = () => {
    const baseStyles = {
      background: '#f5f5f5',
      foreground: '#333333',
      borderColor: '#e0e0e0',
      shadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      brushColor: 'rgba(255, 255, 255, 0)',
    };
    
    switch (activeTheme) {
      case 'enterprise':
        return {
          background: coverColor || '#f8f9fa',
          foreground: '#111827',
          borderColor: '#e5e7eb',
          shadow: '0 4px 10px rgba(0, 0, 0, 0.04)',
          brushColor: 'rgba(255, 255, 255, 0)',
        };
      case 'techDark':
        return {
          background: coverColor || '#1f2937',
          foreground: '#f9fafb',
          borderColor: '#374151',
          shadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          brushColor: 'rgba(255, 255, 255, 0)',
          glow: '0 0 15px rgba(139, 92, 246, 0.3)',
        };
      case 'glass':
        return {
          background: coverColor || 'rgba(15, 23, 42, 0.3)',
          foreground: '#ffffff',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          shadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          brushColor: 'rgba(255, 255, 255, 0)',
          blur: '8px',
        };
      case 'neumorphic':
        return {
          background: coverColor || '#e0e5ec',
          foreground: '#333333',
          borderColor: 'transparent',
          shadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff',
          shadowInset: 'inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff',
          brushColor: 'rgba(255, 255, 255, 0)',
        };
      case 'glow':
        return {
          background: coverColor || '#111827',
          foreground: '#ffffff',
          borderColor: 'rgba(59, 130, 246, 0.3)',
          shadow: '0 0 15px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.2)',
          brushColor: 'rgba(255, 255, 255, 0)',
        };
      default:
        return baseStyles;
    }
  };
  
  // Get variant-specific styles
  const getVariantStyles = (themeStyles) => {
    switch (variant) {
      case 'prize':
        return {
          ...themeStyles,
          background: coverColor || (activeTheme === 'techDark' ? '#6d28d9' : activeTheme === 'enterprise' ? '#3b82f6' : activeTheme === 'glass' ? 'rgba(139, 92, 246, 0.4)' : activeTheme === 'neumorphic' ? '#dee4ec' : '#4f46e5'),
          pattern: 'radial-gradient(circle at center, transparent 0%, transparent 5%, rgba(255, 255, 255, 0.1) 5.1%, rgba(255, 255, 255, 0.2) 10%, transparent 10.1%)',
          patternSize: '20px 20px',
        };
      case 'ticket':
        return {
          ...themeStyles,
          pattern: 'repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 10px, rgba(255, 255, 255, 0.2) 10px, rgba(255, 255, 255, 0.2) 20px)',
        };
      case 'coupon':
        return {
          ...themeStyles,
          pattern: 'repeating-radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 15px, rgba(255, 255, 255, 0.1) 15px, rgba(255, 255, 255, 0.1) 30px)',
        };
      default:
        return themeStyles;
    }
  };
  
  // Initialize canvas drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set canvas size
    canvas.width = width;
    canvas.height = height;
    
    const ctx = canvas.getContext('2d');
    setCanvasContext(ctx);
    
    // Set initial state
    if (ctx) {
      // Apply styles
      const themeStyles = getThemeStyles();
      const variantStyles = getVariantStyles(themeStyles);
      
      // Draw background
      ctx.fillStyle = variantStyles.background;
      ctx.fillRect(0, 0, width, height);
      
      // Draw pattern if defined
      if (variantStyles.pattern) {
        ctx.save();
        const patternCanvas = document.createElement('canvas');
        const patternCtx = patternCanvas.getContext('2d');
        patternCanvas.width = 40;
        patternCanvas.height = 40;
        
        // Create gradient or pattern
        const gradient = patternCtx.createLinearGradient(0, 0, 40, 40);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.2)');
        patternCtx.fillStyle = gradient;
        patternCtx.fillRect(0, 0, 40, 40);
        
        const pattern = ctx.createPattern(patternCanvas, 'repeat');
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      }
      
      // Draw cover image if provided
      if (coverImage) {
        const img = new Image();
        img.onload = () => {
          ctx.drawImage(img, 0, 0, width, height);
        };
        img.src = coverImage;
      }
      
      // Draw stylistic elements based on theme variant
      if (variant === 'ticket') {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(0, 15);
        ctx.lineTo(width, 15);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, height - 15);
        ctx.lineTo(width, height - 15);
        ctx.stroke();
      } else if (variant === 'coupon') {
        // Draw coupon edges
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.setLineDash([]);
        
        const circleRadius = 8;
        const circles = Math.floor(height / (circleRadius * 2 + 4));
        const gap = (height - circles * circleRadius * 2) / (circles + 1);
        
        for (let i = 0; i < circles; i++) {
          const y = gap + i * (gap + circleRadius * 2) + circleRadius;
          
          // Left side circle
          ctx.beginPath();
          ctx.arc(-circleRadius / 2, y, circleRadius, 0, Math.PI * 2);
          ctx.stroke();
          
          // Right side circle
          ctx.beginPath();
          ctx.arc(width + circleRadius / 2, y, circleRadius, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    }

    // Handle reveal all
    if (revealAll) {
      handleRevealAll();
    }
  }, [width, height, coverImage, coverColor, revealAll, activeTheme, variant]);
  
  // Setup event handlers
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || disabled) return;
    
    const handleMouseDown = (e) => {
      isDrawingRef.current = true;
      const point = getPointFromEvent(e);
      setLastPoint(point);
      drawLine(point, point);
    };
    
    const handleMouseMove = (e) => {
      if (!isDrawingRef.current) return;
      
      const currentPoint = getPointFromEvent(e);
      drawLine(lastPoint, currentPoint);
      setLastPoint(currentPoint);
      
      // Check scratch percentage
      calculateScratchPercentage();
    };
    
    const handleMouseUp = () => {
      isDrawingRef.current = false;
    };
    
    const handleMouseOut = () => {
      isDrawingRef.current = false;
    };
    
    // Touch events
    const handleTouchStart = (e) => {
      e.preventDefault();
      handleMouseDown(e.touches[0]);
    };
    
    const handleTouchMove = (e) => {
      e.preventDefault();
      handleMouseMove(e.touches[0]);
    };
    
    const handleTouchEnd = (e) => {
      e.preventDefault();
      handleMouseUp();
    };
    
    // Add event listeners
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseout', handleMouseOut);
    
    // Touch events
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);
    
    // Cleanup
    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseout', handleMouseOut);
      
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, [disabled, lastPoint]);
  
  // Completion tracking
  useEffect(() => {
    if (percentScratched >= completionThreshold && !isRevealed) {
      setIsRevealed(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [percentScratched, completionThreshold, isRevealed, onComplete]);
  
  // Helper to get point from mouse or touch event
  const getPointFromEvent = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };
  
  // Draw scratch line
  const drawLine = (start, end) => {
    if (!canvasContext) return;
    
    canvasContext.globalCompositeOperation = 'destination-out';
    canvasContext.strokeStyle = 'rgba(255, 255, 255, 1)';
    canvasContext.lineWidth = brushSize;
    canvasContext.lineCap = 'round';
    canvasContext.lineJoin = 'round';
    
    canvasContext.beginPath();
    canvasContext.moveTo(start.x, start.y);
    canvasContext.lineTo(end.x, end.y);
    canvasContext.stroke();
  };
  
  // Calculate scratch percentage
  const calculateScratchPercentage = () => {
    if (!canvasContext) return;
    
    const imageData = canvasContext.getImageData(0, 0, width, height);
    const pixels = imageData.data;
    let transparentPixels = 0;
    
    // Count fully transparent pixels (alpha = 0)
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) {
        transparentPixels++;
      }
    }
    
    const totalPixels = width * height;
    const percentTransparent = (transparentPixels / totalPixels) * 100;
    setPercentScratched(percentTransparent);
  };
  
  // Reveal the entire card
  const handleRevealAll = useCallback(() => {
    if (!canvasContext) return;
    
    canvasContext.globalCompositeOperation = 'destination-out';
    canvasContext.fillRect(0, 0, width, height);
    setIsRevealed(true);
    setPercentScratched(100);
    
    if (onComplete) {
      onComplete();
    }
  }, [canvasContext, width, height, onComplete]);
  
  // Reset the scratch card
  const handleReset = useCallback(() => {
    if (!canvasContext) return;
    
    // Redraw the cover
    const themeStyles = getThemeStyles();
    const variantStyles = getVariantStyles(themeStyles);
    
    canvasContext.globalCompositeOperation = 'source-over';
    canvasContext.fillStyle = variantStyles.background;
    canvasContext.fillRect(0, 0, width, height);
    
    if (coverImage) {
      const img = new Image();
      img.onload = () => {
        canvasContext.drawImage(img, 0, 0, width, height);
      };
      img.src = coverImage;
    }
    
    setIsRevealed(false);
    setPercentScratched(0);
  }, [canvasContext, width, height, coverImage, activeTheme, variant]);
  
  // Get theme-specific container styles
  const containerStyles = getThemeStyles();
  const variantStyles = getVariantStyles(containerStyles);
  
  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative rounded-lg overflow-hidden",
        className
      )}
      style={{
        width,
        height,
        borderRadius: '0.5rem',
        border: `1px solid ${variantStyles.borderColor}`,
        boxShadow: variantStyles.shadow,
        ...(variantStyles.blur ? { backdropFilter: `blur(${variantStyles.blur})` } : {}),
      }}
      {...props}
    >
      {/* Content to reveal */}
      <div 
        className="absolute inset-0 flex items-center justify-center z-0 p-4"
        style={{
          color: variantStyles.foreground,
          background: activeTheme === 'glass' ? 'rgba(255, 255, 255, 0.1)' : 
                    activeTheme === 'techDark' ? '#111827' : 
                    activeTheme === 'neumorphic' ? '#e0e5ec' :
                    activeTheme === 'glow' ? '#030712' : '#ffffff',
        }}
      >
        {revealImage ? (
          <img src={revealImage} alt="Revealed content" className="max-w-full max-h-full object-contain" />
        ) : (
          <div className="text-center">
            {revealContent}
          </div>
        )}
      </div>
      
      {/* Scratch canvas */}
      <canvas
        ref={canvasRef}
        className={cn(
          "absolute inset-0 cursor-pointer z-10",
          { "cursor-not-allowed": disabled }
        )}
        style={{
          opacity: isRevealed && revealAll ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      />
      
      {/* Progress indicator (optional) */}
      {false && (
        <div className="absolute bottom-2 right-2 text-xs bg-black/50 text-white px-2 py-1 rounded">
          {Math.floor(percentScratched)}%
        </div>
      )}
    </div>
  );
};

export default ScratchCard;