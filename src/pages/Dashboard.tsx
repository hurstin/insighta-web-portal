import React from 'react';
import { 
  Users, 
  Search, 
  TrendingUp, 
  Clock,
  ExternalLink
} from 'lucide-react';
import RoleGate from '../components/auth/RoleGate';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Total Profiles', value: '12,842', icon: Users, color: 'text-blue-500' },
    { label: 'Intelligence Queries', value: '45.2k', icon: Search, color: 'text-purple-500' },
    { label: 'Avg Match Rate', value: '94.2%', icon: TrendingUp, color: 'text-green-500' },
    { label: 'System Uptime', value: '99.99%', icon: Clock, color: 'text-orange-500' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">System Overview</h1>
        <p className="text-muted-foreground">Welcome back to the Insighta Labs+ control center.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
              <span className="text-xs font-medium text-muted-foreground">Last 30 days</span>
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Recent Activity</h2>
            <button className="text-sm text-primary hover:underline flex items-center">
              View all <ExternalLink className="ml-1 h-3 w-3" />
            </button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 py-2">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <Users className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New profile matched: Profile #{1024 + i}</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Admin Quick Actions</h2>
          <div className="grid gap-4">
            <RoleGate allowedRoles={['ADMIN']} fallback={<p className="text-sm text-muted-foreground italic">Restricted to Administrators</p>}>
              <button className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                Export System Logs (CSV)
              </button>
              <button className="w-full rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/5">
                Manage User Access
              </button>
              <button className="w-full rounded-lg border border-destructive px-4 py-2 text-sm font-semibold text-destructive transition-colors hover:bg-destructive/5">
                Flush Cache
              </button>
            </RoleGate>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
