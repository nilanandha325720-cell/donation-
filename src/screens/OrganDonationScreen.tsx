import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { FormInput } from '../components/FormInput';
import { mockOrganRequests } from '../data/mockData';
import { MapPin, Clock, Heart, User } from 'lucide-react';
import './OrganDonationScreen.css';

const OrganDonationScreen: React.FC = () => {
  const [selectedOrgan, setSelectedOrgan] = useState<string>('all');
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    bloodGroup: '',
    organType: '',
    medicalHistory: ''
  });

  const organs = ['all', 'Kidney', 'Liver', 'Heart', 'Lung', 'Pancreas', 'Intestine'];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'var(--color-error)';
      case 'high': return 'var(--color-warning)';
      case 'medium': return 'var(--color-secondary)';
      case 'low': return 'var(--color-success)';
      default: return 'var(--color-neutral-gray)';
    }
  };

  const filteredRequests = selectedOrgan === 'all'
    ? mockOrganRequests
    : mockOrganRequests.filter(request => request.organType === selectedOrgan);

  const handleRegisterInterest = () => {
    setShowRegistrationModal(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setShowRegistrationModal(false);
    setShowSuccessModal(true);

    setTimeout(() => {
      setShowSuccessModal(false);
      setFormData({
        name: '',
        age: '',
        phone: '',
        email: '',
        bloodGroup: '',
        organType: '',
        medicalHistory: ''
      });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="organ-donation-screen">
      <div className="screen-header">
        <h1>Organ Donation</h1>
        <p>Save lives by becoming an organ donor</p>
      </div>

      <div className="info-banner">
        <Heart size={24} />
        <div>
          <h3>Become a Life Saver</h3>
          <p>Register your interest in organ donation. Your decision can save multiple lives.</p>
        </div>
      </div>

      <div className="filter-section">
        <label htmlFor="organ-filter" className="filter-label">Filter by Organ Type:</label>
        <select
          id="organ-filter"
          value={selectedOrgan}
          onChange={(e) => setSelectedOrgan(e.target.value)}
          className="organ-filter"
        >
          {organs.map(organ => (
            <option key={organ} value={organ}>
              {organ === 'all' ? 'All Organs' : organ}
            </option>
          ))}
        </select>
      </div>

      <div className="registration-section">
        <Card className="registration-card">
          <h3>Register as Organ Donor</h3>
          <p>Join thousands of donors who have pledged to save lives through organ donation.</p>
          <Button variant="primary" onClick={handleRegisterInterest}>
            Register Now
          </Button>
        </Card>
      </div>

      <div className="requests-section">
        <h2>Current Organ Needs</h2>
        <div className="requests-list">
          {filteredRequests.map((request) => (
            <Card key={request.id} className="request-card">
              <div className="request-header">
                <div className="patient-info">
                  <span className="avatar">{request.avatar}</span>
                  <div>
                    <h3 className="patient-name">{request.patientName}</h3>
                    <div className="organ-badge" style={{ backgroundColor: getUrgencyColor(request.urgency) }}>
                      {request.organType}
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
                  <User size={16} />
                  <span>Age: {request.age}, Blood: {request.bloodGroup}</span>
                </div>
                <div className="detail-item">
                  <Clock size={16} />
                  <span>{request.distance} km away</span>
                </div>
              </div>

              <div className="request-note">
                <p>This patient is waiting for a {request.organType.toLowerCase()} transplant. Your donation can save their life.</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Registration Modal */}
      <Modal
        isOpen={showRegistrationModal}
        onClose={() => setShowRegistrationModal(false)}
        title="Register as Organ Donor"
      >
        <form onSubmit={handleFormSubmit}>
          <FormInput
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <FormInput
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
          <FormInput
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <div className="form-group">
            <label className="form-label">Blood Group</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleInputChange}
              className="form-input"
              required
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Preferred Organ(s) to Donate</label>
            <select
              name="organType"
              value={formData.organType}
              onChange={handleInputChange}
              className="form-input"
              required
            >
              <option value="">Select Organ</option>
              <option value="Kidney">Kidney</option>
              <option value="Liver">Liver</option>
              <option value="Heart">Heart</option>
              <option value="Lung">Lung</option>
              <option value="Pancreas">Pancreas</option>
              <option value="Intestine">Intestine</option>
              <option value="Multiple Organs">Multiple Organs</option>
            </select>
          </div>
          <FormInput
            label="Medical History (if any)"
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleInputChange}
            placeholder="Any relevant medical conditions..."
          />
          <Button variant="primary" fullWidth type="submit">
            Submit Registration
          </Button>
        </form>
      </Modal>

      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Registration Successful!"
      >
        <div className="success-content">
          <div className="success-icon">❤️</div>
          <h3>Thank you for your noble decision!</h3>
          <p>Your registration has been received. Our medical team will contact you soon for further evaluation and next steps.</p>
          <p className="success-note">Remember: Organ donation is a selfless act that can save multiple lives.</p>
        </div>
      </Modal>
    </div>
  );
};

export default OrganDonationScreen;