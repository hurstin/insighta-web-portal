import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Github, Activity } from 'lucide-react';

const Login: React.FC = () => {
  const { login } = useAuth();

  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-10 shadow-xl dark:bg-slate-900 border border-border">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 rounded-2xl bg-primary/10 p-4">
            <Activity className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Insighta Labs+</h1>
          <p className="mt-2 text-muted-foreground">
            Demographic Intelligence Portal
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <button
            onClick={login}
            className="flex w-full items-center justify-center gap-3 rounded-lg bg-slate-900 px-4 py-3 text-white transition-all hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            <Github className="h-5 w-5" />
            <span className="font-semibold">Continue with GitHub</span>
          </button>
          
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground dark:bg-slate-900">
                Secure Authentication
              </span>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground">
            By logging in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
