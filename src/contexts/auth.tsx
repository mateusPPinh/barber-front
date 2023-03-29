import {createContext, useContext, PropsWithChildren, useState, useCallback} from 'react'
import api from '../http/api/api'

interface AuthState {
  token: string;
  user: any;
}

interface SignInCredencials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: {
    id: number;
    email: string;
    name: string;
    isAdmin?: boolean;
  };
  signIn(credencials: SignInCredencials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@sys:token');
    const user = localStorage.getItem('@sys:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredencials) => {
    const response = await api.post('users/login', {
      email,
      password,
    });

    const { access_token: token, user } = response.data;

    localStorage.setItem('@sys:token', token);
    localStorage.setItem('@sys:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@sys:token');
    localStorage.removeItem('@sys:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data?.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };