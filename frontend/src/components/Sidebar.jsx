import { useState } from "react";

import DocumentCard from "./DocumentCard";

export default function Sidebar({

    documents,

    setPreview,

    refreshDocuments,

}) {

    const [search, setSearch] = useState("");

    const filtered = documents.filter((doc) =>

        doc.filename

            .toLowerCase()

            .includes(

                search.toLowerCase()

            )

    );

    return (

        <div className="sidebar">

            <h2>

                Research Library

            </h2>

            <input

                className="search"

                placeholder="Search papers..."

                value={search}

                onChange={(e)=>

                    setSearch(e.target.value)

                }

            />

            {

                filtered.length === 0

                ?

                <div className="empty-state">

                    📂

                    <br /><br />

                    No research papers yet.

                    <br />

                    Upload your first PDF.

                </div>

                :

                filtered.map((doc)=>(

                    <DocumentCard

                        key={doc.id}

                        document={doc}

                        refreshDocuments={refreshDocuments}
                        

                        setPreview={setPreview}

                    />

                ))

            }

        </div>

    );

}