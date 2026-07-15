export default function ResearchCard({ metadata }) {

    const readingTime = Math.max(
        1,
        Math.ceil(metadata.words / 200)
    );

    return (

        <div className="card">

            <h2>Research Card</h2>

            <p><strong>Document</strong><br />{metadata.filename || "No document uploaded"}</p>

            <p><strong>Characters</strong><br />{metadata.characters}</p>

            <p><strong>Words</strong><br />{metadata.words}</p>

            <p><strong>Reading Time</strong><br />{readingTime} min</p>

            <p><strong>Status</strong><br />Indexed ✓</p>

        </div>

    );

}