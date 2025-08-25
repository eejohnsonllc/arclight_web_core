import { useEffect, useState } from 'react';

const MobileOptimizer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
      setIsSmallMobile(width <= 576);
    };

    // Check on mount
    checkDeviceType();

    // Check on resize
    window.addEventListener('resize', checkDeviceType);

    // Cleanup
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  // Add mobile-specific CSS variables
  useEffect(() => {
    if (isMobile) {
      document.documentElement.style.setProperty('--mobile-padding', '1rem');
      document.documentElement.style.setProperty('--mobile-font-size', '0.9rem');
      document.documentElement.style.setProperty('--mobile-line-height', '1.5');
    } else {
      document.documentElement.style.setProperty('--mobile-padding', '2rem');
      document.documentElement.style.setProperty('--mobile-font-size', '1rem');
      document.documentElement.style.setProperty('--mobile-line-height', '1.6');
    }
  }, [isMobile]);

  // Add mobile-specific body classes
  useEffect(() => {
    const body = document.body;
    
    if (isMobile) {
      body.classList.add('is-mobile');
      body.classList.remove('is-desktop');
    } else {
      body.classList.add('is-desktop');
      body.classList.remove('is-mobile');
    }

    if (isTablet) {
      body.classList.add('is-tablet');
    } else {
      body.classList.remove('is-tablet');
    }

    if (isSmallMobile) {
      body.classList.add('is-small-mobile');
    } else {
      body.classList.remove('is-small-mobile');
    }
  }, [isMobile, isTablet, isSmallMobile]);

  // Add mobile-specific touch event handling
  useEffect(() => {
    if (isMobile) {
      // Prevent double-tap zoom on mobile
      let lastTouchEnd = 0;
      const preventDoubleTapZoom = (e) => {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
          e.preventDefault();
        }
        lastTouchEnd = now;
      };

      document.addEventListener('touchend', preventDoubleTapZoom, false);

      return () => {
        document.removeEventListener('touchend', preventDoubleTapZoom, false);
      };
    }
  }, [isMobile]);

  // This component doesn't render anything visible
  return null;
};

export default MobileOptimizer;
