import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  UserCircle, 
  LogOut,
  Shield,
  Activity
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { cn } from '../../utils/cn';

const Sidebar: React.FC = () => {
  const { user, logout } = useAuth();

  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/profiles', icon: Users, label: 'Profiles' },
    { to: '/account', icon: UserCircle, label: 'Account' },
  ];

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-border bg-card">
      <div className="flex h-16 items-center border-b border-border px-6">
        <Activity className="h-6 w-6 text-primary mr-2" />
        <span className="text-xl font-bold tracking-tight">Insighta Labs+</span>
      </div>
      
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => cn(
              "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
              isActive 
                ? "bg-primary text-primary-foreground" 
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-border p-4">
        <div className="flex items-center mb-4 px-2">
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
            <UserCircle className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium truncate">{user?.name}</p>
            <div className="flex items-center text-[10px] text-muted-foreground uppercase tracking-wider">
              <Shield className="h-3 w-3 mr-1" />
              {user?.role}
            </div>
          </div>
        </div>
        <button
          onClick={logout}
          className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
