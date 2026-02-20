import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { mockUserProfile, mockDonationHistory } from '../data/mockData';
import { MapPin, Phone, Mail, Calendar, Award } from 'lucide-react';
import './ProfileScreen.css';

const ProfileScreen: React.FC = () => {
  const getDonationTypeIcon = (type: string) => {
    switch (type) {
      case 'blood': return '🩸';
      case 'fund': return '💰';
      case 'equipment': return '🏥';
      case 'organ': return '❤️';
      default: return '❤️';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'completed' ? 'var(--color-success)' : 'var(--color-warning)';
  };

  return (
    <div className="profile-screen">
      <div className="profile-header">
        <div className="profile-avatar">
          {mockUserProfile.avatar}
        </div>
        <h1 className="profile-name">{mockUserProfile.name}</h1>
        <p className="profile-blood-group">Blood Group: {mockUserProfile.bloodGroup}</p>
      </div>

      <div className="profile-stats">
        <div className="stat-card">
          <Award size={24} />
          <div className="stat-info">
            <span className="stat-number">{mockUserProfile.totalDonations}</span>
            <span className="stat-label">Total Donations</span>
          </div>
        </div>
        <div className="stat-card">
          <Calendar size={24} />
          <div className="stat-info">
            <span className="stat-number">{mockUserProfile.joinedDate}</span>
            <span className="stat-label">Member Since</span>
          </div>
        </div>
      </div>

      <Card className="profile-info-card">
        <h2>Contact Information</h2>
        <div className="info-item">
          <Phone size={18} />
          <span>{mockUserProfile.phone}</span>
        </div>
        <div className="info-item">
          <Mail size={18} />
          <span>{mockUserProfile.email}</span>
        </div>
        <div className="info-item">
          <MapPin size={18} />
          <span>{mockUserProfile.location}</span>
        </div>
        <Button variant="outline" fullWidth style={{ marginTop: 'var(--space-lg)' }}>
          Edit Profile
        </Button>
      </Card>

      <Card className="donation-history-card">
        <h2>Donation History</h2>
        <div className="history-list">
          {mockDonationHistory.map((donation) => (
            <div key={donation.id} className="history-item">
              <div className="history-icon">
                {getDonationTypeIcon(donation.type)}
              </div>
              <div className="history-details">
                <h4 className="history-title">{donation.title}</h4>
                {donation.amount && (
                  <p className="history-amount">{donation.amount}</p>
                )}
                <div className="history-meta">
                  <span className="history-date">{donation.date}</span>
                  <span
                    className="history-status"
                    style={{ color: getStatusColor(donation.status) }}
                  >
                    {donation.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ProfileScreen;