export type UserRole = 'ADMIN' | 'ANALYST';

export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  role: UserRole;
  githubId: string;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: () => void;
  logout: () => Promise<void>;
  verifySession: () => Promise<void>;
}
