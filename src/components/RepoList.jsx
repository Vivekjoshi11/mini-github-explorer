import { useContext, useState } from "react";
import { GitHubContext } from "../context/GitHubContext";

export default function RepoList() {
  const { repos } = useContext(GitHubContext);
  const [sortBy, setSortBy] = useState("name");
  const [filter, setFilter] = useState("");

  const filtered = repos
    .filter(repo => repo.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) =>
      sortBy === "stars" ? b.stargazers_count - a.stargazers_count : a.name.localeCompare(b.name)
    );

  if (!repos.length) return null;

  return (
    <div className="repo-list">
      <div className="controls">
        <input placeholder="Filter by name" value={filter} onChange={(e) => setFilter(e.target.value)} />
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="stars">Sort by Stars</option>
        </select>
      </div>

      {filtered.map(repo => (
        <div key={repo.id} className="repo-card">
          <h3><a href={repo.html_url} target="_blank">{repo.name}</a></h3>
          <p>{repo.description}</p>
          <p>⭐ {repo.stargazers_count}</p>
        </div>
      ))}
    </div>
  );
}
