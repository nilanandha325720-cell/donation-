import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';
import './screens/SplashScreen.css';
import './screens/HomeScreen.css';
import './screens/BloodDonationScreen.css';
import './screens/FundDonationScreen.css';
import './screens/MedicalEquipmentScreen.css';
import './screens/ProfileScreen.css';
import './components/BottomNavigation.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);