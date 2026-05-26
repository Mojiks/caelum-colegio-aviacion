import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Session, User } from "@supabase/supabase-js";

import { supabase } from "../lib/supabase";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  role: string | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  role: null,
});

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [user, setUser] =
    useState<User | null>(null);

  const [session, setSession] =
    useState<Session | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [role, setRole] =
    useState<string | null>(null);

  useEffect(() => {

    const loadSession = async () => {

      const {
        data: { session },
      } = await supabase.auth.getSession();

      setSession(session);

      setUser(session?.user ?? null);

      if (session?.user) {

        fetchRole(session.user.id);

      }

      setLoading(false);

    };

    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {

        setSession(session);

        setUser(session?.user ?? null);

        if (session?.user) {

          fetchRole(session.user.id);

        } else {

          setRole(null);

        }

        setLoading(false);

      }
    );

    return () => {
      subscription.unsubscribe();
    };

  }, []);

  const fetchRole = async (
    userId: string
  ) => {

    const { data, error } =
      await supabase
        .from("profiles")
        .select("role")
        .eq("id", userId)
        .single();

    if (!error && data) {

      setRole(data.role);

    }

  };

  return (

    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        role,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export const useAuth = () =>
  useContext(AuthContext);