import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { mockBloodRequests } from '../data/mockData';
import { MapPin, Clock, Droplet } from 'lucide-react';
import './BloodDonationScreen.css';

const BloodDonationScreen: React.FC = () => {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string>('all');
  const [loading, setLoading] = useState(false);

  const bloodGroups = ['all', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'var(--color-error)';
      case 'high': return 'var(--color-warning)';
      case 'medium': return 'var(--color-secondary)';
      case 'low': return 'var(--color-success)';
      default: return 'var(--color-neutral-gray)';
    }
  };

  const filteredRequests = selectedBloodGroup === 'all'
    ? mockBloodRequests
    : mockBloodRequests.filter(request => request.bloodGroup === selectedBloodGroup);

  const handleDonate = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert('Thank you for your willingness to donate! We will contact you soon.');
    }, 1000);
  };

  return (
    <div className="blood-donation-screen">
      <div className="screen-header">
        <h1>Blood Donation</h1>
        <p>Help save lives by donating blood</p>
      </div>

      <div className="filter-section">
        <label htmlFor="blood-group-filter" className="filter-label">Filter by Blood Group:</label>
        <select
          id="blood-group-filter"
          value={selectedBloodGroup}
          onChange={(e) => setSelectedBloodGroup(e.target.value)}
          className="blood-group-filter"
        >
          {bloodGroups.map(group => (
            <option key={group} value={group}>
              {group === 'all' ? 'All Groups' : group}
            </option>
          ))}
        </select>
      </div>

      <div className="requests-list">
        {filteredRequests.map((request) => (
          <Card key={request.id} className="request-card">
            <div className="request-header">
              <div className="requester-info">
                <span className="avatar">{request.avatar}</span>
                <div>
                  <h3 className="requester-name">{request.name}</h3>
                  <div className="blood-group-badge" style={{ backgroundColor: getUrgencyColor(request.urgency) }}>
                    {request.bloodGroup}
                  </div>
                </div>
              </div>
              <div className="urgency-indicator" style={{ color: getUrgencyColor(request.urgency) }}>
                {request.urgency.toUpperCase()}
              </div>
            </div>

            <div className="request-details">
              <div className="detail-item">
                <MapPin size={16} />
                <span>{request.hospital}</span>
              </div>
              <div className="detail-item">
                <Droplet size={16} />
                <span>{request.neededUnits} units needed</span>
              </div>
              <div className="detail-item">
                <Clock size={16} />
                <span>{request.distance} km away</span>
              </div>
            </div>

            <Button
              variant="primary"
              fullWidth
              loading={loading}
              onClick={() => handleDonate()}
            >
              I'm Available to Donate
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BloodDonationScreen;