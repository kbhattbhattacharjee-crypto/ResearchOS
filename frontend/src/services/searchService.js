import api from "./api";

export async function searchPapers(query) {
    const response = await api.get(
        `/search?query=${query}`
    );

    return response.data;
}