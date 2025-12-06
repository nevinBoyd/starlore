// src/api/fetchSky.js
export async function fetchSkyImage(ra, dec, size = 0.4, pixels = 600, survey="DSS") {
  const base = "https://skyview.gsfc.nasa.gov/current/cgi/runquery.pl";
  const params = new URLSearchParams({
    Survey: survey,
    Position: `${ra},${dec}`,
    Size: size,
    Pixels: pixels,
    Return: "gif"
  });

  return `${base}?${params.toString()}`;
}
