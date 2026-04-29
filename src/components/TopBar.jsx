import { useEffect, useRef, useState } from 'react';
import './TopBar.css';

export default function TopBar() {
  const [bg, setBg] = useState('#ffffff');
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const detect = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const [r, g, b] = ctx.getImageData(4, 4, 1, 1).data;
        setBg(`rgb(${r},${g},${b})`);
      } catch {
        // cross-origin fallback — keep white
      }
    };

    if (img.complete) detect();
    else img.addEventListener('load', detect);
  }, []);

  return (
    <div className="topbar" style={{ backgroundColor: bg }}>
      <img
        ref={imgRef}
        src="/logo.jpeg"
        alt="SportTech Logo"
        className="topbar-logo"
        crossOrigin="anonymous"
      />
    </div>
  );
}
