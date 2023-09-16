export default async function getVideo(movieId: number) {
    const api_url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`;
  const res = await fetch(api_url);

  if(!res.ok) throw new Error("Cannot get movie videos");

  return res.json();
}