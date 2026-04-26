import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Mail, 
  MapPin, 
  Briefcase, 
  ShieldCheck,
  Zap,
  BarChart3,
  Calendar
} from 'lucide-react';

const ProfileDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [profile, setProfile] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mocking fetch
    setTimeout(() => {
      setProfile({
        id,
        name: 'Sarah Anderson',
        email: 'sarah.a@tech-corp.io',
        location: 'San Francisco, CA',
        industry: 'Software Engineering',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
        role: 'Senior Engineering Manager',
        score: 98,
        discoveredAt: '2026-04-20T10:30:00Z',
        intelligence: {
          skills: ['Distributed Systems', 'Cloud Native', 'Go', 'React', 'Kubernetes'],
          projects: [
            { name: 'Core Infrastructure Redesign', impact: 'High' },
            { name: 'Global API Gateway', impact: 'Critical' }
          ],
          socialLinks: [
            { platform: 'GitHub', url: 'https://github.com/sanderson' },
            { platform: 'LinkedIn', url: '#' }
          ]
        }
      });
      setIsLoading(false);
    }, 400);
  }, [id]);

  if (isLoading) return <div className="animate-pulse space-y-8">...</div>;

  return (
    <div className="space-y-8 pb-12">
      <Link to="/profiles" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Profiles
      </Link>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/3 space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm text-center">
            <img 
              src={profile.avatarUrl} 
              alt={profile.name} 
              className="mx-auto h-32 w-32 rounded-full border-4 border-primary/20 p-1"
            />
            <h1 className="mt-4 text-2xl font-bold tracking-tight">{profile.name}</h1>
            <p className="text-muted-foreground font-medium">{profile.role}</p>
            
            <div className="mt-6 flex justify-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{profile.score}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Match Score</div>
              </div>
              <div className="w-px bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">5</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Briefcase className="h-4 w-4 text-muted-foreground" />
                <span>{profile.industry}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="h-5 w-5 text-amber-500" />
              <h2 className="text-xl font-bold">Intelligence Snapshot</h2>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="flex items-center text-sm font-semibold uppercase tracking-wider">
                  <BarChart3 className="mr-2 h-4 w-4 text-primary" />
                  Key Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profile.intelligence.skills.map((skill: string) => (
                    <span key={skill} className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium border border-border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="flex items-center text-sm font-semibold uppercase tracking-wider">
                  <ShieldCheck className="mr-2 h-4 w-4 text-green-500" />
                  Verification
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Identity Status</span>
                    <span className="font-medium text-green-600">Verified</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Data Freshness</span>
                    <span className="font-medium">92% Reliable</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="flex items-center text-sm font-semibold uppercase tracking-wider mb-4">
                <Calendar className="mr-2 h-4 w-4 text-blue-500" />
                Discovered Timeline
              </h3>
              <div className="relative pl-6 border-l border-border space-y-6">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-primary border-4 border-background"></div>
                  <div className="text-sm font-medium">Initial Discovery</div>
                  <div className="text-xs text-muted-foreground">April 20, 2026 - 10:30 AM via GitHub Scraper</div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-border border-4 border-background"></div>
                  <div className="text-sm font-medium">Intelligence Enriched</div>
                  <div className="text-xs text-muted-foreground">April 20, 2026 - 10:35 AM via Demographic Engine</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-accent transition-colors">
              Archive Profile
            </button>
            <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity">
              Request Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
