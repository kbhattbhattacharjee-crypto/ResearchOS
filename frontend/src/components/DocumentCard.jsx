export default function DocumentCard({ document }) {

    return (

        <div className="document-card">

            <div>

                <div className="doc-title">

                    📄 {document.filename}

                </div>

                <small>

                    {document.extracted_text.length}

                    {" "}characters

                </small>

            </div>

        </div>

    );

}