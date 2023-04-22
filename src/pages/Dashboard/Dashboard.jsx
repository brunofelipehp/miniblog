import { Link } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

import styles from "./Dashboard.module.css";

export const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const posts = [];

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar o primairo posts
          </Link>
        </div>
      ) : (
        <div>
          <p>Tem posts!</p>
        </div>
      )}
    </div>
  );
};
