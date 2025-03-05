# ReState

A modern mobile real estate application built with React Native and Expo. Real Scout helps users find their ideal home by browsing property listings with comprehensive filtering, detailed property information, and user reviews.

![Real Scout App](assets/images/onboarding.png)

## Features

- 🔐 **User Authentication**: Secure sign-in with Google OAuth
- 🏠 **Property Listings**: Browse through various real estate properties
- 🔍 **Search & Filtering**: Find properties by type, name, or location
- ⭐️ **Reviews**: View detailed property reviews from other users
- 📋 **Property Details**: Comprehensive property information including:
  - Bedrooms and bathrooms count
  - Property area
  - Property type
  - Image gallery
  - Location with map view
  - Facilities and amenities
  - Agent contact information
- 💼 **User Profiles**: Personalized profile with booking history and settings

## Tech Stack

- **Frontend**: React Native & Expo
- **Styling**: NativeWind (TailwindCSS for React Native)
- **Navigation**: Expo Router (file-based routing)
- **Backend**: Appwrite (authentication, database, storage)
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Appwrite instance (or use the provided demo data)

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/real-scout.git
cd real-scout
```

2. Install dependencies

```bash
npm install
```

3. Create .env.local file with your Appwrite credentials:

```
EXPO_PUBLIC_APPWRITE_ENDPOINT=your-appwrite-endpoint
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your-project-id
EXPO_PUBLIC_APPWRITE_DATABASE_ID=your-database-id
EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID=your-galleries-collection-id
EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID=your-reviews-collection-id
EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID=your-agents-collection-id
EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID=your-properties-collection-id
```

4. Start the development server

```bash
npx expo start
```

5. Populate the database with sample data (optional)

```js
// This function is available in lib/seed.ts
await seed();
```

## Project Structure

```
real_estate/
├── app/ - Expo Router app directory
│   ├── (roots)/ - Main app screens
│   │   ├── (tabs)/ - Bottom tab navigation screens
│   │   └── properties/ - Property detail screens
│   ├── sign-in.tsx - Authentication screen
│   └── _layout.tsx - Root layout component
├── assets/ - App assets (images, icons, fonts)
├── components/ - Reusable UI components
├── constants/ - App constants and data
├── lib/ - Utility functions and API services
├── .env.local - Environment variables (not in repo)
└── tailwind.config.js - TailwindCSS configuration
```

## Key Components

- **Card**: Displays property card in listings
- **Comment**: Shows user reviews for properties
- **Filters**: Property filtering functionality
- **Search**: Search component for finding properties
- **NoResults**: Empty state component

## Backend Setup

This project uses Appwrite as the backend service. You'll need to set up the following collections:

1. **Properties** - Store property listings
2. **Agents** - Store agent information
3. **Reviews** - Store property reviews
4. **Galleries** - Store property images

Use the seed.ts script to populate your database with sample data.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Expo Team for the amazing framework
- Appwrite for the backend platform
- NativeWind for the styling solution
