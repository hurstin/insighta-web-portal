import React, { useState, useEffect, useCallback } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  ChevronLeft, 
  ChevronRight,
  MoreVertical,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import RoleGate from '../components/auth/RoleGate';
import { cn } from '../utils/cn';

interface Profile {
  id: string;
  name: string;
  email: string;
  location: string;
  industry: string;
  intelligenceScore: number;
  status: 'Matched' | 'Pending' | 'Failed';
}

const ProfilesList: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages] = useState(5);

  const fetchProfiles = useCallback(async () => {
    try {
      setIsLoading(true);
      // In a real app: const response = await api.get(`/profiles?page=${page}&search=${search}`);
      // Mocking for now
      setTimeout(() => {
        const mockData: Profile[] = Array.from({ length: 10 }).map((_, i) => ({
          id: `PROF-${2000 + i + (page - 1) * 10}`,
          name: `User ${2000 + i}`,
          email: `user${2000 + i}@example.com`,
          location: i % 2 === 0 ? 'San Francisco, CA' : 'New York, NY',
          industry: i % 3 === 0 ? 'Technology' : 'Finance',
          intelligenceScore: 75 + (i % 25),
          status: i % 10 === 9 ? 'Pending' : 'Matched',
        }));
        setProfiles(mockData);
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.error('Failed to fetch profiles:', error);
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchProfiles();
  }, [fetchProfiles]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Intelligence Profiles</h1>
          <p className="text-muted-foreground">Manage and analyze discovered demographic data.</p>
        </div>
        <RoleGate allowedRoles={['ADMIN']}>
          <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity">
            <Download className="h-4 w-4" />
            Export CSV
          </button>
        </RoleGate>
      </div>

      <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search profiles by name, email, or ID..."
            className="w-full rounded-md border border-input bg-background pl-10 pr-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent transition-colors">
          <Filter className="h-4 w-4" />
          Filters
        </button>
      </div>

      <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 font-semibold">Profile ID</th>
                <th className="px-6 py-4 font-semibold">Name & Email</th>
                <th className="px-6 py-4 font-semibold">Industry</th>
                <th className="px-6 py-4 font-semibold">Location</th>
                <th className="px-6 py-4 font-semibold text-center">Score</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {isLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td colSpan={7} className="px-6 py-8 h-16 bg-muted/10"></td>
                  </tr>
                ))
              ) : (
                profiles.map((profile) => (
                  <tr key={profile.id} className="hover:bg-muted/30 transition-colors group">
                    <td className="px-6 py-4 font-mono text-xs text-muted-foreground">{profile.id}</td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-foreground">{profile.name}</div>
                      <div className="text-xs text-muted-foreground">{profile.email}</div>
                    </td>
                    <td className="px-6 py-4">{profile.industry}</td>
                    <td className="px-6 py-4 text-muted-foreground">{profile.location}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={cn(
                        "inline-flex items-center rounded-full px-2 py-1 text-xs font-bold",
                        profile.intelligenceScore > 90 ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                        profile.intelligenceScore > 80 ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
                        "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400"
                      )}>
                        {profile.intelligenceScore}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                        profile.status === 'Matched' ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                        profile.status === 'Pending' ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
                        "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                      )}>
                        {profile.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link to={`/profiles/${profile.id}`} className="p-2 hover:bg-accent rounded-md text-primary">
                          <Eye className="h-4 w-4" />
                        </Link>
                        <button className="p-2 hover:bg-accent rounded-md text-muted-foreground">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-border px-6 py-4 bg-muted/30">
          <p className="text-xs text-muted-foreground">
            Showing <span className="font-medium text-foreground">{(page - 1) * 10 + 1}</span> to <span className="font-medium text-foreground">{page * 10}</span> of <span className="font-medium text-foreground">50</span> results
          </p>
          <div className="flex items-center gap-2">
            <button 
              disabled={page === 1}
              onClick={() => setPage(p => p - 1)}
              className="p-2 rounded-md border border-input bg-card hover:bg-accent disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="text-sm font-medium">Page {page} of {totalPages}</div>
            <button 
              disabled={page === totalPages}
              onClick={() => setPage(p => p + 1)}
              className="p-2 rounded-md border border-input bg-card hover:bg-accent disabled:opacity-50"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilesList;
