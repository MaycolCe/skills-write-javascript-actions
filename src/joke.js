const JOKE_URL = "https://icanhazdadjoke.com/";

async function getJoke() {
  const response = await fetch(JOKE_URL, {
    headers: {
      Accept: "application/json",
      "User-Agent": "Writing JavaScript action GitHub Skills exercise.",
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching joke: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.joke;
}

export default getJoke;