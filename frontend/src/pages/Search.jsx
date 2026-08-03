import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

import useSearch from "../hooks/useSearch";

import SearchResultCard from "../components/search/SearchResultCard";
import SearchSkeleton from "../components/search/SearchSkeleton";

export default function Search() {

 const [query, setQuery] =
  useState("");

 const {

  loading,
  error,
  results,
  semantic,
  runSearch,

 } = useSearch();

 async function handleSearch() {

  if (!query.trim()) return;

  await runSearch(query);

 }

 return (

  <div>

   <div className="page-header">

    <div>

     <h1>
      Research Search
     </h1>

     <p>
      Search papers, concepts, authors and knowledge.
     </p>

    </div>

   </div>

   <div className="glass-card search-panel">

    <div className="search-input-wrapper">

     <SearchIcon size={18} />

     <input
      value={query}
      onChange={(e)=>
       setQuery(e.target.value)
      }
      placeholder="Search papers, authors, topics..."
      onKeyDown={(e)=>{

       if(e.key==="Enter"){

        handleSearch();

       }

      }}
     />

    </div>

    <button
     className="primary-btn"
     onClick={handleSearch}
    >
     Search
    </button>

   </div>

   {error && (

    <div
     className="glass-card"
     style={{
      marginTop:20,
      color:"#ff8080",
     }}
    >
     {error}
    </div>

   )}

   {loading && (

    <div
     className="search-results"
     style={{
      marginTop:20,
     }}
    >

     <SearchSkeleton />
     <SearchSkeleton />
     <SearchSkeleton />

    </div>

   )}

   {

    !loading &&
    results.length > 0 &&

    <>

     <div
      className="section-title"
      style={{
       marginTop:40,
       marginBottom:20,
      }}
     >

      Search Results

     </div>

     <div className="search-results">

      {

       results.map((paper)=>(

        <SearchResultCard
         key={paper.id}
         paper={paper}
        />

       ))

      }

     </div>

    </>

   }

   {

    !loading &&
    semantic.length > 0 &&

    <>

     <div
      className="section-title"
      style={{
       marginTop:40,
       marginBottom:20,
      }}
     >

      AI Similar Papers

     </div>

     <div className="search-results">

      {

       semantic.map((paper)=>(

        <SearchResultCard
         key={paper.id}
         paper={paper}
        />

       ))

      }

     </div>

    </>

   }

   {

    !loading &&
    results.length === 0 &&
    semantic.length === 0 &&

    <div
     className="glass-card"
     style={{
      marginTop:30,
     }}
    >

     <h3>

      Semantic Discovery

     </h3>

     <p>

      Search millions of research papers,
      discover related work,
      explore citations,
      and uncover hidden connections.

     </p>

    </div>

   }

  </div>

 );

}