export default function ResearchCard({ metadata }) {

    return (

        <div className="card">

            <h2>Research Intelligence</h2>

            <hr />

            <p>
                <strong>📄 Document</strong>
                <br />
                {metadata.filename || "No document uploaded"}
            </p>

            <p>
                <strong>📝 Summary</strong>
                <br />
                {metadata.summary || "Waiting for upload..."}
            </p>

            <p>
                <strong>🏷 Keywords</strong>
                <br />
                {metadata.keywords || "-"}
            </p>

            <p>
                <strong>📚 Words</strong>
                <br />
                {metadata.word_count || 0}
            </p>

            <p>
                <strong>⏱ Reading Time</strong>
                <br />
                {metadata.reading_time || 0} min
            </p>

        </div>

    );

}