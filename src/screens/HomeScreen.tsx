import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import { Heart, DollarSign, Stethoscope, HelpCircle } from 'lucide-react';
import './HomeScreen.css';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 'blood',
      title: 'Blood Donation',
      description: 'Save lives by donating blood',
      icon: Heart,
      path: '/blood-donation',
      color: 'var(--color-primary)'
    },
    {
      id: 'fund',
      title: 'Fund Donation',
      description: 'Support NGOs and causes',
      icon: DollarSign,
      path: '/fund-donation',
      color: 'var(--color-success)'
    },
    {
      id: 'equipment',
      title: 'Medical Equipment',
      description: 'Donate or request equipment',
      icon: Stethoscope,
      path: '/medical-equipment',
      color: 'var(--color-secondary)'
    },
    {
      id: 'help',
      title: 'Request Help',
      description: 'Get assistance when needed',
      icon: HelpCircle,
      path: '/profile', // For now, redirect to profile
      color: 'var(--color-warning)'
    }
  ];

  return (
    <div className="home-screen">
      <div className="home-header">
        <h1 className="welcome-title">Welcome to DonateHub</h1>
        <p className="welcome-subtitle">Choose how you'd like to help today</p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Card
              key={category.id}
              className="category-card"
              clickable
              onClick={() => navigate(category.path)}
            >
              <div className="category-icon" style={{ color: category.color }}>
                <IconComponent size={32} />
              </div>
              <h3 className="category-title">{category.title}</h3>
              <p className="category-description">{category.description}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default HomeScreen;