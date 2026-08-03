import { NavLink, Outlet } from "react-router-dom";

export default function AppShell() {

  return (

    <div className="shell">

      <aside className="app-sidebar">

        <div className="logo">

          <span className="logo-dot"></span>

          <div>

            <h2>ResearchOS</h2>

            <small>
              Research Intelligence Platform
            </small>

          </div>

        </div>

        <nav>

          <NavLink to="/">

            <span>Workspace</span>

          </NavLink>

          <NavLink to="/library">

            <span>Library</span>

          </NavLink>

          <NavLink to="/search">

            <span>Search</span>

          </NavLink>

          <NavLink to="/analytics">

            <span>Analytics</span>

          </NavLink>

        </nav>

        <div className="sidebar-footer">

          <div className="storage-card">

            <small>

              Knowledge Capacity

            </small>

            <h3>

              2.4 GB

            </h3>

            <div className="storage-bar">

              <div className="storage-fill"></div>

            </div>

          </div>

        </div>

      </aside>

      <section className="shell-main">

        <header className="topbar">

          <div>

            <h1>

              Research Intelligence Workspace

            </h1>

            <p>

              Literature discovery, semantic search,
              knowledge extraction and analytics.

            </p>

          </div>

          <div className="topbar-actions">

            <button className="glass-btn">

              New Collection

            </button>

            <div className="profile-circle">

              KB

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