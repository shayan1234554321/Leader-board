const upload = async (object) => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ESR4hOd8yk9LvYkRVQNB/scores/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(object),
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }

  return 'working';
};

const get = async () => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ESR4hOd8yk9LvYkRVQNB/scores/',
      {
        method: 'GET',
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  return 'working';
};

export { upload, get };
