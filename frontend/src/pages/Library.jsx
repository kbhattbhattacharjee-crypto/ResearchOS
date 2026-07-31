import useDocuments from "../hooks/useDocuments";

export default function Library() {

 const { documents } =
  useDocuments();

 return (

  <div>

   <h1>

    Library

   </h1>

   {

    documents.map(doc => (

     <div
      key={doc.id}
      className="panel"
     >

      <h3>

       {doc.filename}

      </h3>

      <p>

       {doc.characters}
       characters

      </p>

     </div>

    ))

   }

  </div>

 );

}