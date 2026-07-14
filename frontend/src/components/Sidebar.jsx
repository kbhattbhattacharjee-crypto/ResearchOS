import { useState } from "react";
import DocumentCard from "./DocumentCard";
import useDocuments from "../hooks/useDocuments";

export default function Sidebar() {

    const { documents } = useDocuments();

    const [search, setSearch] = useState("");

    const filtered = documents.filter((doc) =>

        doc.filename
            .toLowerCase()
            .includes(search.toLowerCase())

    );

    return (

        <div className="sidebar">

            <h2>Documents</h2>

            <input

                className="search"

                placeholder="Search documents..."

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

            />

            {

                filtered.map((doc)=>(

                    <DocumentCard

                        key={doc.id}

                        document={doc}

                    />

                ))

            }

        </div>

    );

}