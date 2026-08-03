import { useState } from "react";
import { searchPapers } from "../services/searchService";

export default function useSearch() {

 const [loading, setLoading] =
  useState(false);

 const [results, setResults] =
  useState([]);

 const [semantic, setSemantic] =
  useState([]);

 const [error, setError] =
  useState("");

 async function runSearch(query) {

  try {

   setLoading(true);

   setError("");

   const data =
    await searchPapers(query);

   setResults(
    data.results || []
   );

   setSemantic(
    data.semantic_results || []
   );

  }

  catch (err) {

   setError(
    "Unable to search papers."
   );

   console.error(err);

  }

  finally {

   setLoading(false);

  }

 }

 return {

  loading,
  error,
  results,
  semantic,
  runSearch,

 };

}