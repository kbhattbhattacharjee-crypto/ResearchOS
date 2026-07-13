import api from "../services/api";

function UploadBox({

    file,
    setFile,
    setPreview,

}) {

    const uploadPDF = async () => {

        if (!file) return;

        const formData = new FormData();

        formData.append(
            "file",
            file
        );

        const response = await api.post(

            "/files/upload",

            formData

        );

        setPreview(

            response.data.preview

        );

    };

    return (

        <div className="card">

            <input

                type="file"

                accept=".pdf"

                onChange={(e)=>

                    setFile(e.target.files[0])

                }

            />

            <button

                onClick={uploadPDF}

            >

                Upload PDF

            </button>

        </div>

    );

}

export default UploadBox;