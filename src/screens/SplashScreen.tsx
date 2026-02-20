import React from 'react';
import { Button } from '../components/Button';
import './SplashScreen.css';

interface SplashScreenProps {
  onGetStarted: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onGetStarted }) => {
  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="logo">
          <h1 className="app-name">DonateHub</h1>
          <div className="logo-icon">❤️</div>
        </div>
        <h2 className="tagline">Donate. Save Lives.</h2>
        <p className="subtitle">Join thousands of donors making a difference</p>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={onGetStarted}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default SplashScreen;