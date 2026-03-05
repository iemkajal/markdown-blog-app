import { createContext, useContext } from "react";

export const AuthContext = createContext();

// custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};
