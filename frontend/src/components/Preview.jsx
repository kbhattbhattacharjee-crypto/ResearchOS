function Preview({ preview }) {

    return (

        <div className="card">

            <h2>Document Preview</h2>

            <textarea

                rows="20"

                value={preview}

                readOnly

            />

        </div>

    );

}

export default Preview;