import useDocuments from "../hooks/useDocuments";

export default function Library() {

 const { documents } =
  useDocuments();

 return (

  <div>

   <div className="page-header">

    <h1>

     Research Library

    </h1>

    <p>

     Indexed documents, extracted knowledge and research assets.

    </p>

   </div>

   <div className="library-grid">

    {

     documents.length === 0

     ?

     (

      <div className="glass empty-card">

       <h2>

        No Documents Yet

       </h2>

       <p>

        Upload a paper and ResearchOS will build
        summaries, metadata and semantic search.

       </p>

      </div>

     )

     :

     (

      documents.map((doc)=>(

       <div
        key={doc.id}
        className="glass library-card"
       >

        <div className="library-top">

         <strong>

          Research Paper

         </strong>

         <span>

          Indexed

         </span>

        </div>

        <h3>

         {doc.filename}

        </h3>

        <div className="library-meta">

         <div>

          Characters:
          {" "}
          {doc.characters}

         </div>

         <div>

          Status:
          {" "}
          Ready

         </div>

        </div>

        <button
         className="primary-btn"
        >

         Open

        </button>

       </div>

      ))

     )

    }

   </div>

  </div>

 );

}