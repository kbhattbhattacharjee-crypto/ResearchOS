import { useState } from "react";

import DocumentCard from "./DocumentCard";

export default function Sidebar({

    documents,

    setPreview,

    refreshDocuments,

}) {

    const [search, setSearch] = useState("");

    const filtered = documents.filter(

        (doc)=>

            doc.filename

                .toLowerCase()

                .includes(

                    search.toLowerCase()

                )

    );

    return (

        <div className="sidebar">

            <h2>

                Documents

            </h2>

            <input

                className="search"

                placeholder="Search..."

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

            />

            {

                filtered.length===0 ?

                (

                    <p>

                        No documents yet.

                    </p>

                )

                :

                (

                    filtered.map(

                        doc=>(

                            <DocumentCard

                                key={doc.id}

                                document={doc}

                                refreshDocuments={refreshDocuments}

                                onClick={()=>setPreview(doc.preview)}

                            />

                        )

                    )

                )

            }

        </div>

    );

}