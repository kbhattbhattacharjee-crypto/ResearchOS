export default function SearchResultCard({
    paper,
   }) {
   
    return (
   
     <div className="glass-card paper-card">
   
      <div className="paper-top">
   
       <h3>
        {paper.title}
       </h3>
   
       <div className="relevance-badge">
   
        {Math.round(
         paper.relevance_score || 0
        )}
   %
   
       </div>
   
      </div>
   
      <div className="paper-meta">
   
       <span>
        {paper.year}
       </span>
   
       <span>
        {paper.venue}
       </span>
   
       <span>
        {paper.citations}
        citations
       </span>
   
      </div>
   
      <p className="authors">
   
       {
   
        paper.authors?.length
   
         ? paper.authors.join(", ")
   
         : "Unknown Authors"
   
       }
   
      </p>
   
     </div>
   
    );
   
   }