'use client';

import { useEffect, useState } from 'react';

const BTCIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor">
    <circle cx="16" cy="16" r="16" fill="#F7931A"/>
    <path fill="white" d="M22.5 14.1c.3-2-1.2-3.1-3.3-3.8l.7-2.7-1.6-.4-.7 2.6c-.4-.1-.8-.2-1.3-.3l.7-2.6-1.6-.4-.7 2.7c-.4-.1-.7-.2-1-.2v0l-2.3-.6-.4 1.7s1.2.3 1.2.3c.7.2.8.6.8 1l-.8 3.2c0 0 .1 0 .1 0l-.1 0-1.1 4.5c-.1.2-.3.6-.8.4 0 0-1.2-.3-1.2-.3l-.8 1.8 2.1.5c.4.1.8.2 1.2.3l-.7 2.8 1.6.4.7-2.7c.4.1.9.2 1.3.3l-.7 2.7 1.6.4.7-2.8c2.8.5 4.9.3 5.8-2.2.7-2-.1-3.2-1.5-4 1.1-.2 1.9-1 2.1-2.6zm-3.7 5.2c-.5 2-3.9.9-5 .7l.9-3.6c1.1.3 4.6.8 4.1 2.9zm.5-5.2c-.5 1.8-3.3.9-4.2.7l.8-3.3c.9.2 3.9.6 3.4 2.6z"/>
  </svg>
);

const ETHIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor">
    <circle cx="16" cy="16" r="16" fill="#627EEA"/>
    <path fill="white" fillOpacity="0.6" d="M16 4v8.87l7.5 3.35L16 4z"/>
    <path fill="white" d="M16 4l-7.5 12.22L16 12.87V4z"/>
    <path fill="white" fillOpacity="0.6" d="M16 21.97v6.03l7.5-10.4L16 21.97z"/>
    <path fill="white" d="M16 28v-6.03l-7.5-4.37L16 28z"/>
    <path fill="white" fillOpacity="0.2" d="M16 20.57l7.5-4.35L16 12.87v7.7z"/>
    <path fill="white" fillOpacity="0.6" d="M8.5 16.22l7.5 4.35v-7.7l-7.5 3.35z"/>
  </svg>
);

const USDTIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor">
    <circle cx="16" cy="16" r="16" fill="#26A17B"/>
    <path fill="white" d="M17.9 17.9v0c-.1 0-.8.1-2.3.1-1.2 0-2-.1-2.3-.1v0c-4.6-.2-8-1.1-8-2.1 0-1.1 3.4-1.9 8-2.1v3.3c.3 0 1.1.1 2.3.1 1.4 0 2.1-.1 2.3-.1v-3.3c4.6.2 8 1.1 8 2.1 0 1.1-3.4 1.9-8 2.1zm0-4.6v-3h6.6V7h-17v3.3h6.6v3c-5.2.2-9.1 1.4-9.1 2.8 0 1.4 3.9 2.6 9.1 2.8v10.1h3.9V19c5.2-.2 9.1-1.4 9.1-2.8 0-1.4-3.9-2.6-9.1-2.8z"/>
  </svg>
);

const ILSIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className}>
    <circle cx="16" cy="16" r="16" fill="#0066CC"/>
    <text x="16" y="21" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">₪</text>
  </svg>
);

interface FloatingIcon {
  id: number;
  Icon: React.FC<{ className?: string }>;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export function FloatingIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    const iconComponents = [BTCIcon, ETHIcon, USDTIcon, ILSIcon];
    const newIcons: FloatingIcon[] = [];

    for (let i = 0; i < 12; i++) {
      newIcons.push({
        id: i,
        Icon: iconComponents[i % 4],
        x: Math.random() * 90 + 5,
        y: Math.random() * 80 + 10,
        size: Math.random() * 30 + 40,
        delay: Math.random() * 3,
        duration: Math.random() * 4 + 4,
      });
    }

    setIcons(newIcons);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ id, Icon, x, y, size, delay, duration }) => (
        <div
          key={id}
          className="absolute opacity-20 hover:opacity-40 transition-opacity"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: size,
            height: size,
            animation: `float ${duration}s ease-in-out infinite`,
            animationDelay: `${delay}s`,
          }}
        >
          <Icon className="w-full h-full drop-shadow-lg" />
        </div>
      ))}
    </div>
  );
}

export { BTCIcon, ETHIcon, USDTIcon, ILSIcon };
