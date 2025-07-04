import { useContext } from "react";
import { GitHubContext } from "../context/GitHubContext";

export default function UserProfile() {
  const { user } = useContext(GitHubContext);

  if (!user) return null;

  return (
    <div className="user-profile">
      <img src={user.avatar_url} alt="avatar" />
      <h2>{user.login}</h2>
      <p>{user.bio}</p>
      <p>Public Repos: {user.public_repos}</p>
      <a href={user.html_url} target="_blank" rel="noreferrer">GitHub Profile</a>
    </div>
  );
}
