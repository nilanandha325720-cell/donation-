# Donation Platform

A modern, user-friendly web application that enables individuals to contribute to various causes including blood donation, organ donation, fundraising, and medical equipment assistance. Built with React and TypeScript for a seamless donation experience.

## 📋 Table of Contents

- [Project Description](#project-description)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Demo Video](#demo-video)
- [Architecture](#architecture)
- [API Documentation](#api-documentation)
- [Team Members](#team-members)
- [License](#license)

---

## 🎯 Project Description

The Donation Platform is a comprehensive solution designed to connect donors with organizations and individuals in need. Whether you want to donate blood, organs, funds, or medical equipment, this application provides an intuitive interface to manage all your donations in one place. The platform features multiple donation types, user profiles, and a streamlined navigation experience.

**Purpose:** To simplify the donation process and increase awareness about various types of donations that can save lives.

---

## 🛠️ Tech Stack

### Frontend
- **React** (^19.2.4) - UI library for building interactive components
- **TypeScript** (^5.9.3) - Strongly typed JavaScript for better code quality
- **Vite** (^7.3.1) - Lightning-fast build tool and dev server
- **React Router DOM** (^7.13.0) - Client-side routing and navigation
- **Lucide React** (^0.575.0) - Beautiful, consistent icon library

### Development Tools
- **Node.js** - JavaScript runtime
- **npm** - Package manager
- **CSS3** - Styling with custom stylesheets
- **ts-node** (^10.9.2) - TypeScript execution for Node.js

### Build & Deployment
- **Vite** - Production-ready bundle optimization
- **TypeScript Compiler** - Code compilation and type checking

---

## ✨ Features

### 1. Blood Donation Management
- Register as a blood donor
- View blood donation centers and schedules
- Track donation history
- Manage donor eligibility information

### 2. Organ Donation Registry
- Register for organ donation program
- Provide medical history and preferences
- Find organ matching programs
- Request organ donation awareness materials

### 3. Fund Donation
- Browse active fundraising campaigns
- Make secure donations to various causes
- Track contribution history
- View impact of your donations

### 4. Medical Equipment Assistance
- Request needed medical equipment
- Browse available equipment donations
- Manage equipment donation requests
- Connect with medical equipment providers

### 5. User Profile Management
- Create and manage user profile
- View donation history across all categories
- Update personal information
- Manage donation preferences and notifications

### 6. Intuitive Navigation
- Bottom navigation bar for easy access
- Splash screen with onboarding
- Responsive mobile-first design
- Clean and user-friendly interface

---

## 💻 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher) or yarn

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nilanandha325720-cell/donation-.git
   cd donation-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Verify installation:**
   ```bash
   npm list
   ```

---

## 🚀 Usage

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will automatically open in your browser at `http://localhost:5173`

### Build for Production

Compile TypeScript and create an optimized production build:

```bash
npm run build
```

The build artifacts will be generated in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

---

## 📸 Screenshots

### Home Screen
![Home Screen](./screenshots/home-screen.png)
*Main dashboard with donation type options and quick access buttons*

### Donation Selection
![Donation Types](./screenshots/donation-types.png)
*User can choose between blood, organ, fund, and medical equipment donations*

### Donation Form
![Donation Form](./screenshots/donation-form.png)
*Form interface for submitting donation information with validation*

### Profile Management
![Profile Screen](./screenshots/profile-screen.png)
*User profile page displaying donation history and personal information*

> **Note:** Screenshots should be added to a `./screenshots/` directory in the project root

---

## 🎥 Demo Video

Watch a complete walkthrough of the Donation Platform:

[Demo Video Link](https://youtu.be/your-demo-video-link)

**Duration:** ~5 minutes

**Contents:**
- App navigation and features
- Donation process walkthrough
- Profile management
- Responsive design showcase

> **Note:** Replace with actual demo video link once created

---

## 🏗️ Architecture

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                   DONATION PLATFORM                      │
└─────────────────────────────────────────────────────────┘
                            │
         ┌──────────────────┼──────────────────┐
         │                  │                  │
    ┌────▼─────┐    ┌───────▼────────┐  ┌─────▼─────┐
    │ Frontend  │    │   Routing      │  │  State    │
    │ (React)   │    │   (React       │  │ Management│
    │           │    │    Router)     │  │ (useState)│
    └────┬─────┘    └───────┬────────┘  └─────┬─────┘
         │                  │                  │
         └──────────────────┼──────────────────┘
                            │
         ┌──────────────────┼──────────────────┐
         │                  │                  │
    ┌────▼──────────┐  ┌────▼────────┐  ┌────▼────────┐
    │  Components   │  │   Screens   │  │ Styles/CSS  │
    │  - Button     │  │ - Home      │  │ - Global    │
    │  - Card       │  │ - Blood     │  │ - Component │
    │  - Modal      │  │ - Organ     │  │ - Specific  │
    │  - FormInput  │  │ - Fund      │  │             │
    │  - Navigation │  │ - Equipment │  │             │
    │  - Skeleton   │  │ - Profile   │  │             │
    └───────────────┘  └─────────────┘  └─────────────┘
         │                  │                  │
         └──────────────────┼──────────────────┘
                            │
                    ┌───────▼────────┐
                    │   Mock Data    │
                    │  (mockData.ts) │
                    │                │
                    │ - Donors       │
                    │ - Campaigns    │
                    │ - Equipment    │
                    └────────────────┘
```

### Directory Structure

```
donation-/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx       # Button component
│   │   ├── Card.tsx         # Card container
│   │   ├── FormInput.tsx    # Form input fields
│   │   ├── Modal.tsx        # Modal dialogs
│   │   ├── SkeletonLoader.tsx # Loading state
│   │   └── BottomNavigation.tsx # App navigation
│   ├── screens/             # Full-page components
│   │   ├── SplashScreen.tsx # Onboarding screen
│   │   ├── HomeScreen.tsx   # Home/dashboard
│   │   ├── BloodDonationScreen.tsx
│   │   ├── OrganDonationScreen.tsx
│   │   ├── FundDonationScreen.tsx
│   │   ├── MedicalEquipmentScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── data/
│   │   └── mockData.ts      # Mock database
│   ├── styles/
│   │   └── global.css       # Global styles
│   ├── App.tsx              # Root component
│   └── main.tsx             # Application entry point
├── index.html               # HTML entry point
├── package.json             # Dependencies & scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
├── README.md                # Project documentation
├── LICENSE                  # MIT License
└── .gitignore               # Git ignore rules
```

---

## 📚 API Documentation

### Current Status
The application currently uses **mock data** (in `src/data/mockData.ts`) for demonstration purposes. 

### For Backend Integration

When connecting to a real backend API, implement the following endpoints:

#### Blood Donation Service
```
GET    /api/blood-centers      - Get list of blood donation centers
POST   /api/blood-donations    - Register blood donation
GET    /api/blood/status       - Check donation eligibility
```

#### Organ Donation Service
```
GET    /api/organ-programs     - Get organ donation programs
POST   /api/organ-registration - Register for organ donation
GET    /api/organ/matching     - Check organ matching status
```

#### Fund Donation Service
```
GET    /api/campaigns          - Get active fundraising campaigns
POST   /api/donations          - Submit donation
GET    /api/campaigns/:id      - Get campaign details
```

#### Medical Equipment Service
```
GET    /api/equipment          - Get available equipment
POST   /api/equipment/request  - Request equipment
GET    /api/equipment/status   - Check request status
```

#### User Profile Service
```
GET    /api/users/:id          - Get user profile
PUT    /api/users/:id          - Update user profile
GET    /api/users/:id/donations - Get user's donation history
```

### Response Format
```json
{
  "success": true,
  "data": { },
  "message": "Operation successful",
  "timestamp": "2026-02-21T10:30:00Z"
}
```

### Authentication
Implement JWT tokens for secure API access:
```
Authorization: Bearer <token>
```

---

## 👥 Team Members

| Name | Role | Contact |
|------|------|---------|
| Your Name | Full Stack Developer | [GitHub](https://github.com/nilanandha325720-cell) |

**Contributing:** This project was developed as a comprehensive donation platform. For team inquiries or collaborations, please contact via GitHub.

---

## 📄 License

This project is licensed under the **ISC License**.

### ISC License Summary
- ✅ Commercial use permitted
- ✅ Modification allowed
- ✅ Distribution permitted
- ⚠️ Include license and copyright notice
- ❌ Trademark use not permitted
- ❌ Liability not accepted
- ❌ Warranty not provided

For the full license text, see [LICENSE](./LICENSE) file.

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes with meaningful messages (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🐛 Issues & Support

- **Report Issues:** [GitHub Issues](https://github.com/nilanandha325720-cell/donation-/issues)
- **Feature Requests:** Create an issue with `[FEATURE]` prefix
- **Bug Reports:** Create an issue with `[BUG]` prefix

---

## 📋 Development Notes

### Code Quality Standards
- TypeScript strict mode enabled for type safety
- Comments explaining business logic and complex algorithms
- Modular component structure for reusability
- CSS organized by component for maintainability

### Build Information
- Development: Vite dev server with HMR
- Production: Optimized bundle with tree-shaking
- Testing: Ready for unit and integration tests

### Performance Optimization
- Component-level code splitting
- Lazy loading for routes (recommended enhancement)
- Icon optimization with Lucide React
- Skeleton loaders for better UX

---

## 📞 Contact & Links

- **GitHub Repository:** https://github.com/nilanandha325720-cell/donation-
- **Issues:** https://github.com/nilanandha325720-cell/donation-/issues
- **Live Demo:** [Add deployment link here]

---

## 🗓️ Changelog

### Version 1.0.0 (Current)
- Initial release
- Core donation features (Blood, Organ, Fund, Medical Equipment)
- User profile management
- Bottom navigation
- Responsive design

---

**Last Updated:** February 21, 2026

Made with ❤️ for a better tomorrow
