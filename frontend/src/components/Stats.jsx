export default function Stats({ stats }) {
    return (
      <div className="stats">
  
        <div className="stat-card">
          <h3>Documents</h3>
          <p>{stats.total_documents}</p>
        </div>
  
        <div className="stat-card">
          <h3>Characters</h3>
          <p>{stats.total_characters}</p>
        </div>
  
      </div>
    );
  }