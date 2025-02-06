const API_KEY = "AIzaSyD9I8oDo_6IrlDQEXnmPMDUI8zC9HfkwsE";


async function fetchTrailer(movieTitle) {
  const query = `${movieTitle} official trailer`;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&key=${API_KEY}&maxResults=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.items.length > 0) {
      sessionStorage.setItem("trailer", `https://www.youtube.com/embed/${data.items[0].id.videoId}`)
      return `https://www.youtube.com/watch?v=${data.items[0].id.videoId}`;
    } else {
      return "Трейлер не знайдено";
    }
  } catch (error) {
    console.error("Помилка отримання трейлера:", error);
    return "Помилка завантаження";
  }
}

export default fetchTrailer;