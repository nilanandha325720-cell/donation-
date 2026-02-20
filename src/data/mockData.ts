export interface BloodRequest {
  id: string;
  name: string;
  bloodGroup: string;
  hospital: string;
  urgency: 'critical' | 'high' | 'medium' | 'low';
  neededUnits: number;
  distance: number;
  avatar: string;
}

export interface NGO {
  id: string;
  name: string;
  cause: string;
  description: string;
  goal: number;
  raised: number;
  image: string;
}

export interface Equipment {
  id: string;
  name: string;
  quantity: number;
  condition: string;
  needed: number;
}

export interface DonationHistory {
  id: string;
  type: 'blood' | 'fund' | 'equipment';
  title: string;
  amount?: string;
  date: string;
  status: 'completed' | 'pending';
}

export interface UserProfile {
  name: string;
  phone: string;
  email: string;
  location: string;
  avatar: string;
  bloodGroup?: string;
  totalDonations: number;
  joinedDate: string;
}

export const mockBloodRequests: BloodRequest[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    bloodGroup: 'O+',
    hospital: 'Apollo Hospital, Delhi',
    urgency: 'critical',
    neededUnits: 2,
    distance: 2.5,
    avatar: '👨‍⚕️'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    bloodGroup: 'B+',
    hospital: 'Max Hospital, Bangalore',
    urgency: 'high',
    neededUnits: 1,
    distance: 5.0,
    avatar: '👩'
  },
  {
    id: '3',
    name: 'Amit Patel',
    bloodGroup: 'AB-',
    hospital: 'AIIMS, Mumbai',
    urgency: 'medium',
    neededUnits: 3,
    distance: 8.3,
    avatar: '👨'
  },
  {
    id: '4',
    name: 'Neha Singh',
    bloodGroup: 'A+',
    hospital: 'Fortis Hospital, Pune',
    urgency: 'low',
    neededUnits: 1,
    distance: 12.0,
    avatar: '👩‍🏫'
  },
  {
    id: '5',
    name: 'Vikas Gupta',
    bloodGroup: 'O-',
    hospital: 'DRDO Hospital, Hyderabad',
    urgency: 'critical',
    neededUnits: 2,
    distance: 3.2,
    avatar: '👨‍💼'
  }
];

export const mockNGOs: NGO[] = [
  {
    id: '1',
    name: 'Children\'s Hope Foundation',
    cause: 'Child Healthcare',
    description: 'Providing medical care and nutrition to underprivileged children',
    goal: 500000,
    raised: 325000,
    image: '🏥'
  },
  {
    id: '2',
    name: 'Rural Health Initiative',
    cause: 'Rural Healthcare',
    description: 'Building healthcare facilities in remote villages',
    goal: 1000000,
    raised: 650000,
    image: '🏘️'
  },
  {
    id: '3',
    name: 'Emergency Relief Fund',
    cause: 'Disaster Relief',
    description: 'Rapid response to natural disasters and emergencies',
    goal: 2000000,
    raised: 1200000,
    image: '🆘'
  },
  {
    id: '4',
    name: 'Women\'s Health Clinic',
    cause: 'Women\'s Healthcare',
    description: 'Maternal and reproductive health services for underserved communities',
    goal: 300000,
    raised: 180000,
    image: '👩‍⚕️'
  },
  {
    id: '5',
    name: 'Elderly Care Foundation',
    cause: 'Senior Care',
    description: 'Healthcare and support for elderly citizens',
    goal: 400000,
    raised: 220000,
    image: '👴'
  }
];

export const mockEquipment: Equipment[] = [
  { id: '1', name: 'Wheelchairs', quantity: 45, condition: 'Good', needed: 30 },
  { id: '2', name: 'Oxygen Cylinders', quantity: 20, condition: 'Excellent', needed: 50 },
  { id: '3', name: 'Crutches', quantity: 60, condition: 'Good', needed: 40 },
  { id: '4', name: 'Hospital Beds', quantity: 15, condition: 'Fair', needed: 25 },
  { id: '5', name: 'Stretchers', quantity: 30, condition: 'Good', needed: 20 }
];

export const mockDonationHistory: DonationHistory[] = [
  {
    id: '1',
    type: 'blood',
    title: 'Blood Donation to Apollo Hospital',
    date: '2026-02-15',
    status: 'completed'
  },
  {
    id: '2',
    type: 'fund',
    title: 'Donation to Children\'s Hope Foundation',
    amount: '₹5,000',
    date: '2026-02-10',
    status: 'completed'
  },
  {
    id: '3',
    type: 'equipment',
    title: 'Wheelchair Donation',
    date: '2026-02-05',
    status: 'completed'
  },
  {
    id: '4',
    type: 'fund',
    title: 'Emergency Relief Donation',
    amount: '₹10,000',
    date: '2026-01-28',
    status: 'completed'
  },
  {
    id: '5',
    type: 'blood',
    title: 'Blood Donation to AIIMS',
    date: '2026-01-20',
    status: 'completed'
  }
];

export const mockUserProfile: UserProfile = {
  name: 'Deepak Sharma',
  phone: '+91 98765 43210',
  email: 'deepak.sharma@email.com',
  location: 'New Delhi, India',
  avatar: '👨‍💼',
  bloodGroup: 'O+',
  totalDonations: 5,
  joinedDate: '2025-03-15'
};
