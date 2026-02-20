import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import BloodDonationScreen from './screens/BloodDonationScreen';
import OrganDonationScreen from './screens/OrganDonationScreen';
import FundDonationScreen from './screens/FundDonationScreen';
import MedicalEquipmentScreen from './screens/MedicalEquipmentScreen';
import ProfileScreen from './screens/ProfileScreen';
import BottomNavigation from './components/BottomNavigation';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleGetStarted = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onGetStarted={handleGetStarted} />;
  }

  return (
    <Router>
      <div className="app">
        <main className="app-content">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/blood-donation" element={<BloodDonationScreen />} />
            <Route path="/organ-donation" element={<OrganDonationScreen />} />
            <Route path="/fund-donation" element={<FundDonationScreen />} />
            <Route path="/medical-equipment" element={<MedicalEquipmentScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </main>
        <BottomNavigation />
      </div>
    </Router>
  );
}

export default App;