import api from "./api";

export async function searchPapers(query) {

 if (!query?.trim()) {

  return {
   results: [],
   semantic_results: [],
  };

 }

 const response =
  await api.get(
   `/search/?query=${encodeURIComponent(query)}`
  );

 return response.data;

}