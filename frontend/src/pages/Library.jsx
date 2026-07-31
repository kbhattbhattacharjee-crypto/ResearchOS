import { useMemo, useState } from "react";
import { Search, FileText, Calendar, Database } from "lucide-react";
import useDocuments from "../hooks/useDocuments";

export default function Library() {

    const { documents } = useDocuments();

    const [query, setQuery] = useState("");

    const filtered = useMemo(() => {

        return documents.filter((doc) =>
            doc.filename
                .toLowerCase()
                .includes(query.toLowerCase())
        );

    }, [documents, query]);

    return (

        <>

            <div className="page-header">

                <div>

                    <h1>

                        Research Library

                    </h1>

                    <p>

                        Organize every paper inside one searchable knowledge base.

                    </p>

                </div>

            </div>

            <div className="glass search-box">

                <Search size={18} />

                <input

                    placeholder="Search your library..."

                    value={query}

                    onChange={(e)=>setQuery(e.target.value)}

                />

            </div>

            <div className="library-grid">

                {

                    filtered.length===0 ?

                    (

                        <div className="glass empty-card">

                            <FileText size={60}/>

                            <h2>

                                No Papers Found

                            </h2>

                            <p>

                                Upload your first research paper to start building your knowledge base.

                            </p>

                        </div>

                    )

                    :

                    filtered.map(doc=>(

                        <div
                            key={doc.id}
                            className="glass library-card"
                        >

                            <div className="library-top">

                                <FileText size={30}/>

                                <span>

                                    Indexed

                                </span>

                            </div>

                            <h3>

                                {doc.filename}

                            </h3>

                            <div className="library-meta">

                                <div>

                                    <Database size={16}/>

                                    {doc.characters.toLocaleString()} chars

                                </div>

                                <div>

                                    <Calendar size={16}/>

                                    Ready

                                </div>

                            </div>

                            <button className="primary-btn">

                                Open

                            </button>

                        </div>

                    ))

                }

            </div>

        </>

    );

}