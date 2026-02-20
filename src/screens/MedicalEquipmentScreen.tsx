import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { FormInput } from '../components/FormInput';
import { mockEquipment } from '../data/mockData';
import { Package, Plus, Search } from 'lucide-react';
import './MedicalEquipmentScreen.css';

const MedicalEquipmentScreen: React.FC = () => {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    equipment: '',
    quantity: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setShowDonateModal(false);
    setShowRequestModal(false);
    setShowSuccessModal(true);

    setTimeout(() => {
      setShowSuccessModal(false);
      setFormData({ name: '', phone: '', location: '', equipment: '', quantity: '' });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="medical-equipment-screen">
      <div className="screen-header">
        <h1>Medical Equipment</h1>
        <p>Donate or request medical equipment</p>
      </div>

      <div className="action-buttons">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={() => setShowDonateModal(true)}
        >
          <Plus size={20} />
          Donate Equipment
        </Button>
        <Button
          variant="secondary"
          size="lg"
          fullWidth
          onClick={() => setShowRequestModal(true)}
        >
          <Search size={20} />
          Request Equipment
        </Button>
      </div>

      <div className="equipment-list">
        <h2>Available Equipment</h2>
        {mockEquipment.map((equipment) => (
          <Card key={equipment.id} className="equipment-card">
            <div className="equipment-header">
              <div className="equipment-icon">
                <Package size={24} />
              </div>
              <div className="equipment-info">
                <h3 className="equipment-name">{equipment.name}</h3>
                <div className="equipment-stats">
                  <span className="quantity">Available: {equipment.quantity}</span>
                  <span className="condition">Condition: {equipment.condition}</span>
                  <span className="needed">Needed: {equipment.needed}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Donate Modal */}
      <Modal
        isOpen={showDonateModal}
        onClose={() => setShowDonateModal(false)}
        title="Donate Equipment"
      >
        <form onSubmit={handleFormSubmit}>
          <FormInput
            label="Your Name"
            name="name"
            value={formData.name}
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
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
          <FormInput
            label="Equipment Type"
            name="equipment"
            placeholder="e.g., Wheelchair, Oxygen Cylinder"
            value={formData.equipment}
            onChange={handleInputChange}
            required
          />
          <FormInput
            label="Quantity"
            name="quantity"
            type="number"
            value={formData.quantity}
            onChange={handleInputChange}
            required
          />
          <Button variant="primary" fullWidth type="submit">
            Submit Donation
          </Button>
        </form>
      </Modal>

      {/* Request Modal */}
      <Modal
        isOpen={showRequestModal}
        onClose={() => setShowRequestModal(false)}
        title="Request Equipment"
      >
        <form onSubmit={handleFormSubmit}>
          <FormInput
            label="Your Name"
            name="name"
            value={formData.name}
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
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
          <FormInput
            label="Equipment Needed"
            name="equipment"
            placeholder="e.g., Wheelchair, Oxygen Cylinder"
            value={formData.equipment}
            onChange={handleInputChange}
            required
          />
          <FormInput
            label="Quantity Needed"
            name="quantity"
            type="number"
            value={formData.quantity}
            onChange={handleInputChange}
            required
          />
          <Button variant="primary" fullWidth type="submit">
            Submit Request
          </Button>
        </form>
      </Modal>

      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Submission Successful!"
      >
        <div className="success-content">
          <div className="success-icon">✅</div>
          <h3>Thank you!</h3>
          <p>Your submission has been received. We will contact you soon.</p>
        </div>
      </Modal>
    </div>
  );
};

export default MedicalEquipmentScreen;