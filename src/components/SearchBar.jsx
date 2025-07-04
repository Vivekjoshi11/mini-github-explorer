import { useContext, useState } from "react";
import axios from "axios";
import { GitHubContext } from "../context/GitHubContext";

export default function SearchBar() {
  const [username, setUsername] = useState("");
  const { setUser, setRepos, setError, setLoading } = useContext(GitHubContext);

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    setUser(null);
    setRepos([]);
    try {
      const userRes = await axios.get(`https://api.github.com/users/${username}`);
      const repoRes = await axios.get(`https://api.github.com/users/${username}/repos`);
      setUser(userRes.data);
      setRepos(repoRes.data);
    } catch (err) {
      if (err.response?.status === 404) {
        setError("User not found.");
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-bar">
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="GitHub Username" />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
