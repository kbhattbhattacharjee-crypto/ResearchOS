import { NavLink, Outlet } from "react-router-dom";

export default function AppShell() {
  return (
    <div className="shell">

      <aside className="app-sidebar">

        <div className="logo">
          <span className="logo-dot"></span>
          <div>
            <h2>ResearchOS</h2>
            <small>AI Research Workspace</small>
          </div>
        </div>

        <nav>

          <NavLink to="/">
            <span>⌂</span>
            <span>Workspace</span>
          </NavLink>

          <NavLink to="/library">
            <span>◫</span>
            <span>Library</span>
          </NavLink>

          <NavLink to="/search">
            <span>⌕</span>
            <span>Search</span>
          </NavLink>

          <NavLink to="/analytics">
            <span>◔</span>
            <span>Analytics</span>
          </NavLink>

        </nav>

        <div className="sidebar-footer">

          <div className="storage-card">

            <small>Storage</small>

            <h3>2.4 GB</h3>

            <div className="storage-bar">
              <div className="storage-fill"></div>
            </div>

          </div>

        </div>

      </aside>

      <section className="shell-main">

        <header className="topbar">

          <div>

            <h1>Research Workspace</h1>

            <p>
              Organize papers. Search knowledge. Build intelligence.
            </p>

          </div>

          <div className="topbar-actions">

            <button className="glass-btn">

              New Collection

            </button>

            <div className="profile-circle">

              R

            </div>

          </div>

        </header>

        <main className="shell-content">

          <Outlet />

        </main>

      </section>

    </div>
  );
}