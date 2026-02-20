import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Heart, Package, User } from 'lucide-react';
import './BottomNavigation.css';

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      path: '/'
    },
    {
      id: 'donate',
      label: 'Donate',
      icon: Heart,
      path: '/fund-donation' // Default to fund donation
    },
    {
      id: 'requests',
      label: 'Requests',
      icon: Package,
      path: '/medical-equipment' // Default to equipment
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: User,
      path: '/profile'
    }
  ];

  return (
    <nav className="bottom-navigation">
      {navItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = location.pathname === item.path;

        return (
          <button
            key={item.id}
            className={`nav-item ${isActive ? 'nav-item-active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            <IconComponent size={20} />
            <span className="nav-label">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavigation;