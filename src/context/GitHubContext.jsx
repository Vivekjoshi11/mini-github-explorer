import { createContext, useState } from "react";

export const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <GitHubContext.Provider value={{ user, setUser, repos, setRepos, loading, setLoading, error, setError }}>
      {children}
    </GitHubContext.Provider>
  );
};
