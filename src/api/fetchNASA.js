export async function fetchNASAImages(query) {
  const url = `https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}&media_type=image`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    const items = data.collection?.items || [];
    const filtered = items
      .filter(item => item.links && item.links[0].href) // must have an image
      .filter(item => {
        const asset = item.links[0];
        return asset.render === "image"; // avoid weird media types
      })
      .map(item => ({
        title: item.data[0].title,
        date: item.data[0].date_created,
        description: item.data[0].description,
        keywords: item.data[0].keywords,
        center: item.data[0].center,
        image: item.links[0].href,
      }));

    return filtered;
  } catch (err) {
    console.error("NASA API ERROR:", err);
    return [];
  }
}
