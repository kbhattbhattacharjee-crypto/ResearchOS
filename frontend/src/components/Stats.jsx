import {
  FaFileAlt,
  FaFont,
  FaChartBar,
  FaBolt,
} from "react-icons/fa";

export default function Stats({ stats }) {

  const average =
    stats.total_documents === 0
      ? 0
      : Math.round(
          stats.total_characters /
            stats.total_documents
        );

  return (

    <div className="stats">

      <div className="stat-card">

        <FaFileAlt className="stat-icon" />

        <h3>Documents</h3>

        <p>{stats.total_documents}</p>

      </div>

      <div className="stat-card">

        <FaFont className="stat-icon" />

        <h3>Characters</h3>

        <p>{stats.total_characters}</p>

      </div>

      <div className="stat-card">

        <FaChartBar className="stat-icon" />

        <h3>Average</h3>

        <p>{average}</p>

      </div>

      <div className="stat-card">

        <FaBolt className="stat-icon" />

        <h3>Status</h3>

        <p>Ready</p>

      </div>

    </div>

  );

}