import React, { useState } from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';
import { mockNGOs } from '../data/mockData';
import './FundDonationScreen.css';

const FundDonationScreen: React.FC = () => {
  const [selectedNGO, setSelectedNGO] = useState<typeof mockNGOs[0] | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<string>('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const amounts = ['₹500', '₹1000', '₹5000'];

  const handleDonateClick = (ngo: typeof mockNGOs[0]) => {
    setSelectedNGO(ngo);
    setSelectedAmount('');
    setShowPaymentModal(true);
  };

  const handlePaymentSubmit = () => {
    if (!selectedAmount) return;

    setShowPaymentModal(false);
    setShowSuccessModal(true);

    // Reset after showing success
    setTimeout(() => {
      setShowSuccessModal(false);
      setSelectedNGO(null);
    }, 2000);
  };

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100);
  };

  return (
    <div className="fund-donation-screen">
      <div className="screen-header">
        <h1>Fund Donation</h1>
        <p>Support NGOs making a difference</p>
      </div>

      <div className="ngos-list">
        {mockNGOs.map((ngo) => (
          <Card key={ngo.id} className="ngo-card">
            <div className="ngo-header">
              <div className="ngo-icon">{ngo.image}</div>
              <div className="ngo-info">
                <h3 className="ngo-name">{ngo.name}</h3>
                <p className="ngo-cause">{ngo.cause}</p>
              </div>
            </div>

            <p className="ngo-description">{ngo.description}</p>

            <div className="fundraising-progress">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${getProgressPercentage(ngo.raised, ngo.goal)}%` }}
                />
              </div>
              <div className="progress-text">
                <span className="raised-amount">₹{ngo.raised.toLocaleString()}</span>
                <span className="goal-amount"> of ₹{ngo.goal.toLocaleString()}</span>
              </div>
            </div>

            <Button
              variant="primary"
              fullWidth
              onClick={() => handleDonateClick(ngo)}
            >
              Donate Now
            </Button>
          </Card>
        ))}
      </div>

      {/* Payment Modal */}
      <Modal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        title="Make a Donation"
      >
        {selectedNGO && (
          <div className="payment-modal-content">
            <div className="selected-ngo">
              <div className="ngo-icon-small">{selectedNGO.image}</div>
              <div>
                <h4>{selectedNGO.name}</h4>
                <p>{selectedNGO.cause}</p>
              </div>
            </div>

            <div className="amount-selection">
              <h4>Select Amount</h4>
              <div className="amount-buttons">
                {amounts.map((amount) => (
                  <Button
                    key={amount}
                    variant={selectedAmount === amount ? 'primary' : 'outline'}
                    onClick={() => setSelectedAmount(amount)}
                  >
                    {amount}
                  </Button>
                ))}
                <Button
                  variant={selectedAmount === 'custom' ? 'primary' : 'outline'}
                  onClick={() => setSelectedAmount('custom')}
                >
                  Custom
                </Button>
              </div>

              {selectedAmount === 'custom' && (
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="custom-amount-input"
                  onChange={(e) => setSelectedAmount(e.target.value)}
                />
              )}
            </div>

            <Button
              variant="success"
              fullWidth
              disabled={!selectedAmount}
              onClick={handlePaymentSubmit}
            >
              Complete Donation
            </Button>
          </div>
        )}
      </Modal>

      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Donation Successful!"
      >
        <div className="success-content">
          <div className="success-icon">✅</div>
          <h3>Thank you for your generosity!</h3>
          <p>Your donation of {selectedAmount} has been processed successfully.</p>
          <p>You will receive a confirmation email shortly.</p>
        </div>
      </Modal>
    </div>
  );
};

export default FundDonationScreen;