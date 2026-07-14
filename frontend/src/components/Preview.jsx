export default function Preview({

    preview,

}) {

    return (

        <div className="results">

            <h2>

                📄 Document Preview

            </h2>

            {

                preview

                ?

                (

                    <textarea

                        rows="20"

                        value={preview}

                        readOnly

                    />

                )

                :

                (

                    <div className="empty-preview">

                        <h3>

                            No document selected

                        </h3>

                        <p>

                            Upload a PDF to begin.

                        </p>

                    </div>

                )

            }

        </div>

    );

}