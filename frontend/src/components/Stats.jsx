export default function Stats({ stats }) {

  return (

      <div className="stats">

          <div className="stat-card">

              <h3>📄 Documents</h3>

              <p>{stats.total_documents}</p>

              <small>Total stored</small>

          </div>

          <div className="stat-card">

              <h3>📝 Characters</h3>

              <p>{stats.total_characters}</p>

              <small>Extracted text</small>

          </div>

          <div className="stat-card">

              <h3>⚡ Status</h3>

              <p>Online</p>

              <small>Backend Connected</small>

          </div>

      </div>

  );

}