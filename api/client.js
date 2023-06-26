async function client(endpoint, { body, ...customConfig } = {}) {
  const headers = { "content-type": "application/json" };
  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }
  const response = await window.fetch(
    `https://api.github.com/${endpoint}`,
    config
  );
  if (response.ok) {
    return await response.json();
  } else {
    const errorMessage = await response.text();
    return Promise.reject(new Error(errorMessage));
  }
}

export default client;
