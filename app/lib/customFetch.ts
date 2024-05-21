const customFetch = async (
  url: string,
  options: RequestInit = {}
): Promise<Response> => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
};

export default customFetch;
