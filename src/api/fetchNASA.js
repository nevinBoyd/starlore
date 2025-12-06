export async function fetchNASAImages(searchTerm) {
  async function search(q) {
    const url = `https://images-api.nasa.gov/search?q=${encodeURIComponent(q)}&media_type=image`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data.collection.items.slice(0, 10).map(item => ({
        image: item.links?.[0]?.href,
        title: item.data?.[0]?.title || "Untitled",
        description: item.data?.[0]?.description || "No description"
      }));
    } catch {
      return [];
    }
  }

  let results = await search(searchTerm);
  if (!results.length) results = await search(searchTerm.split(" ")[0]);  // fallback single word
  if (!results.length) results = await search("nebula");                  // last resort

  return results;
}
