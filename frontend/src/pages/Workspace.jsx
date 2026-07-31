import {
    FiUploadCloud,
    FiSearch,
    FiBookOpen,
    FiCpu,
    FiDatabase,
    FiTrendingUp,
} from "react-icons/fi";

export default function Workspace() {

    return (

        <>

            <section className="hero">

                <div className="hero-left">

                    <span className="hero-badge">
                        ResearchOS 3.0
                    </span>

                    <h1>
                        Your AI Research
                        <br />
                        Operating System
                    </h1>

                    <p>

                        Upload PDFs, search millions of papers,
                        build literature reviews, extract
                        knowledge and let AI organize everything
                        automatically.

                    </p>

                    <div className="hero-actions">

                        <button className="primary-btn">
                            Upload Research
                        </button>

                        <button className="secondary-btn">
                            Explore Papers
                        </button>

                    </div>

                </div>

                <div className="hero-right glass">

                    <div className="floating-card">

                        <FiCpu size={28} />

                        <h3>AI Ready</h3>

                        <p>
                            Semantic Search
                        </p>

                    </div>

                    <div className="floating-card">

                        <FiBookOpen size={28} />

                        <h3>Research</h3>

                        <p>
                            Knowledge Base
                        </p>

                    </div>

                    <div className="floating-card">

                        <FiTrendingUp size={28} />

                        <h3>Analytics</h3>

                        <p>
                            Live Statistics
                        </p>

                    </div>

                </div>

            </section>

            <section className="dashboard-grid">

                <div className="glass dashboard-card">

                    <FiUploadCloud size={34} />

                    <h3>Upload PDFs</h3>

                    <p>

                        Drag & drop papers.
                        AI extracts metadata,
                        summaries and keywords.

                    </p>

                </div>

                <div className="glass dashboard-card">

                    <FiSearch size={34} />

                    <h3>Semantic Search</h3>

                    <p>

                        Search by meaning,
                        not only keywords.

                    </p>

                </div>

                <div className="glass dashboard-card">

                    <FiDatabase size={34} />

                    <h3>Research Library</h3>

                    <p>

                        Every paper indexed,
                        searchable and organized.

                    </p>

                </div>

            </section>

        </>

    );

}