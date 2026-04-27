# Insighta Labs+ Web Portal

A premium React-based demographic intelligence portal for managing and analyzing profile data. Built with speed, security, and aesthetics in mind.

## 🚀 Technology Stack

- **Framework**: [React 19](https://react.dev/) with [Vite 8](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (New CSS-first engine)
- **Icons**: [Lucide React](https://lucide.dev/)
- **API Client**: [Axios](https://axios-http.com/)
- **Routing**: [React Router 7](https://reactrouter.com/)

## ✨ Key Features

- **GitHub OAuth Integration**: Secure authentication flow using NestJS backend.
- **HTTP-only Cookie Auth**: Secure session management that prevents XSS token theft.
- **CSRF Protection**: Automatic XSRF-TOKEN injection for all state-changing requests.
- **Role-Based Access Control (RBAC)**:
  - `ADMIN`: Full system access, including data export and user management.
  - `ANALYST`: Read-only access to intelligence profiles and dashboards.
- **Responsive Dashboard**: Real-time system metrics and activity tracking.
- **Profile Management**: Searchable, paginated list of intelligence profiles with deep-dive detail views.
- **Modern UI**: Dark mode support, glassmorphism effects, and smooth micro-animations.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- Running [Insighta Backend](https://github.com/your-repo/insighta-backend)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/insighta-web-portal.git
   cd insighta-web-portal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory:
   ```dotenv
   # Live backend (default)
   VITE_API_URL=https://insighta-backend-hurstin6975-vqh74ndl.leapcell.dev

   # Local development (optional override)
   # VITE_API_URL=http://localhost:3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```
src/
├── api/             # Axios client & CSRF interceptors
├── components/
│   ├── auth/        # ProtectedRoute, RoleGate
│   ├── layout/      # Navbar, Sidebar, Page Shell
│   └── ui/          # Shared UI components
├── context/         # AuthContext for global state
├── hooks/           # Custom hooks (useAuth)
├── pages/           # Page views (Dashboard, Profiles, etc.)
├── types/           # TypeScript interfaces
├── utils/           # Helper functions (cn utility)
└── App.tsx          # Main routing & provider setup
```

## 🔒 Security Configuration

The portal is designed to work with a NestJS backend using the following security headers:
- `X-XSRF-TOKEN`: Attached to POST/PUT/DELETE requests.
- `withCredentials: true`: Enables sending HTTP-only cookies across origins.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
