"use client";
import { User } from "@/types";
import { createContext, useContext, useState } from "react";
import { SignInResponse, signIn } from "next-auth/react";
import { useNavigation } from "@/hooks/useNavigation";
import { NextResponse } from "next/server";

interface IAppContext {
  user: User | undefined;
  loading?: boolean;
  error: string | undefined | null;
  setError: (error: string | undefined | null) => void;
  handleLoginSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRegisterSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  googleSignIn: () => void;
  navigateTo: (path: string) => void;
}
const AppContext = createContext<IAppContext>({
  user: undefined,
  loading: false,
  handleInputChange: () => {},
  error: "",
  setError: () => {},
  handleLoginSubmit: () => {},
  handleRegisterSubmit: () => {},
  googleSignIn: () => {},
  navigateTo: () => {},
});

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({ email: "", password: "", name: "" });
  const [error, setError] = useState<string | undefined | null>(null);
  const { router } = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = signIn("credentials", {
        redirect: false,
        username: user.email,
        password: user.password,
      });
      res.then((data: SignInResponse | undefined) => {
        if (!data?.ok) {
          if (data?.status === 401) {
            setError("Invalid credentials");
          } else {
            setError(data?.error);
          }
          setLoading(false);
          return;
        }
        router.push("/chat");
        setLoading(false);
      });
    } catch (e) {
      console.log(e);
      setError("Something went wrong");
      setLoading(false);
    }
  };
  const loadingDelay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200 || data.status === 201) {
            router.push("/login");
            setLoading(false);
          } else {
            setError(data?.error);
            setLoading(false);
          }
        });
    } catch (e) {
      console.log(e);
      setError("Something went wrong");
      setLoading(false);
    }
  };
  const googleSignIn = () => {
    signIn("google");
  };
  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        error,
        loading,
        setError,
        handleInputChange,
        handleLoginSubmit,
        handleRegisterSubmit,
        googleSignIn,
        navigateTo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppWrapper, useAppContext };
