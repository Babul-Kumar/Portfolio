import { useEffect, useRef } from 'react';

interface PixelBlastProps {
  variant?: 'circle' | 'square';
  pixelSize?: number;
  color?: string;
  patternScale?: number;
  patternDensity?: number;
  pixelSizeJitter?: number;
  enableRipples?: boolean;
  rippleSpeed?: number;
  rippleThickness?: number;
  rippleIntensityScale?: number;
  liquid?: boolean;
  liquidStrength?: number;
  liquidRadius?: number;
  liquidWobbleSpeed?: number;
  speed?: number;
  edgeFade?: number;
  transparent?: boolean;
}

export default function PixelBlast({
  variant = 'circle',
  pixelSize = 6,
  color = '#B19EEF',
  patternScale = 3,
  patternDensity = 1.2,
  pixelSizeJitter = 0.5,
  enableRipples = true,
  rippleSpeed = 0.4,
  rippleThickness = 0.12,
  rippleIntensityScale = 1.5,
  liquid = true,
  liquidStrength = 0.12,
  liquidRadius = 1.2,
  liquidWobbleSpeed = 5,
  speed = 0.6,
  edgeFade = 0.25,
  transparent = true,
}: PixelBlastProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let time = 0;
    const cols = Math.ceil(canvas.offsetWidth / pixelSize);
    const rows = Math.ceil(canvas.offsetHeight / pixelSize);

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : { r: 177, g: 158, b: 239 };
    };

    const rgb = hexToRgb(color);

    const animate = () => {
      time += speed * 0.016;

      if (transparent) {
        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      } else {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      }

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * pixelSize;
          const y = j * pixelSize;

          const centerX = canvas.offsetWidth / 2;
          const centerY = canvas.offsetHeight / 2;
          const distFromCenter = Math.sqrt(
            Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
          );

          let intensity = Math.sin(
            distFromCenter / (pixelSize * patternScale) - time * rippleSpeed
          );

          intensity = (intensity + 1) / 2;
          intensity = Math.pow(intensity, patternDensity);

          if (liquid) {
            const wobble =
              Math.sin(x * 0.01 + time * liquidWobbleSpeed) *
                Math.cos(y * 0.01 + time * liquidWobbleSpeed) *
                liquidStrength +
              Math.sin(distFromCenter * 0.02 - time) * liquidRadius * 0.1;
            intensity += wobble;
          }

          if (enableRipples) {
            const ripple =
              Math.sin(distFromCenter / 50 - time * rippleSpeed * 3) *
              rippleThickness;
            intensity += ripple * rippleIntensityScale;
          }

          const maxDist = Math.sqrt(
            Math.pow(canvas.offsetWidth / 2, 2) +
              Math.pow(canvas.offsetHeight / 2, 2)
          );
          const edgeFactor = 1 - Math.pow(distFromCenter / maxDist, 2) * edgeFade;
          intensity *= edgeFactor;

          intensity = Math.max(0, Math.min(1, intensity));

          const jitter =
            (Math.sin(x * 0.1 + time) * Math.cos(y * 0.1 + time) * pixelSizeJitter) / 2;
          const currentPixelSize = pixelSize * (1 + jitter);

          const alpha = intensity;
          ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;

          if (variant === 'circle') {
            ctx.beginPath();
            ctx.arc(
              x + pixelSize / 2,
              y + pixelSize / 2,
              currentPixelSize / 2,
              0,
              Math.PI * 2
            );
            ctx.fill();
          } else {
            ctx.fillRect(x, y, currentPixelSize, currentPixelSize);
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    variant,
    pixelSize,
    color,
    patternScale,
    patternDensity,
    pixelSizeJitter,
    enableRipples,
    rippleSpeed,
    rippleThickness,
    rippleIntensityScale,
    liquid,
    liquidStrength,
    liquidRadius,
    liquidWobbleSpeed,
    speed,
    edgeFade,
    transparent,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
