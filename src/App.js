

import React, { useContext } from "react";
import "./App.css";
import { GitHubContext } from "./context/GitHubContext";
import SearchBar from "./components/SearchBar";
import UserProfile from "./components/UserProfile";
import RepoList from "./components/RepoList";

function App() {
  const { error, loading } = useContext(GitHubContext);

  return (
    <div className="App">
      <h1>Mini GitHub Explorer</h1>
      <SearchBar />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <UserProfile />
      <RepoList />
    </div>
  );
}

export default App;
