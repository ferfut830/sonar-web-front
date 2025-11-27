import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#1e40af',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '40px',
        }}
      >
        <svg width="140" height="140" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="6" fill="none" />
          <path
            d="M60 100 L70 60 L80 140 L90 40 L100 160 L110 50 L120 150 L130 70 L140 130"
            stroke="white"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}

