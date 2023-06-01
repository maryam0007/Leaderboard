const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/eiGSg3KP6kfl4Lhnsmpe/scores';

export const getGame = async () => {
  const fetchGame = await fetch(API_URL);
  const data = await fetchGame.json();
  return data.result;
};

export const postGame = async (score) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  });
};