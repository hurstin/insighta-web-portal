import React from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  UserCircle, 
  Mail, 
  Shield, 
  Calendar, 
  Github,
  Key,
  Activity
} from 'lucide-react';

const Account: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Your Account</h1>
        <p className="text-muted-foreground">Manage your identity and access permissions within Insighta Labs+.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Profile Information</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-6 pb-6 border-b border-border">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <UserCircle className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{user?.name}</h3>
                  <p className="text-sm text-muted-foreground">Member since April 2026</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Mail className="h-3 w-3" />
                    Email Address
                  </label>
                  <p className="font-medium">{user?.email}</p>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Shield className="h-3 w-3" />
                    Role Assignment
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                      {user?.role}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">
                      {user?.role === 'ADMIN' ? 'Full System Access' : 'Read & Analyze Only'}
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Github className="h-3 w-3" />
                    Connected Account
                  </label>
                  <p className="font-medium text-sm">GitHub ID: {user?.githubId}</p>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Key className="h-3 w-3" />
                    Authentication Mode
                  </label>
                  <p className="font-medium text-sm">OAuth 2.0 (HTTP-only Cookie)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-destructive">Danger Zone</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Deleting your account will revoke all access and wipe your personalized analysis history.
            </p>
            <button className="rounded-lg border border-destructive px-4 py-2 text-sm font-semibold text-destructive hover:bg-destructive hover:text-white transition-colors">
              Delete Account
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" />
              Security Log
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-xs py-2 border-l-2 border-primary/20 pl-3">
                  <p className="font-semibold">Login Successful</p>
                  <p className="text-muted-foreground">IP: 192.168.1.{i * 10}</p>
                  <p className="text-muted-foreground mt-1 flex items-center">
                    <Calendar className="mr-1 h-3 w-3" /> 2 hours ago
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
