const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

export const consumeAPIEndpoint = async (url, method, headerOptions) => {
  const response = await fetch(`${PROXY_URL}${url}`, {
    method: method,
    headers: {
      Accept: "text/json",
      "Content-Type": "application/json",
      ...headerOptions,
    },
  });

  if (!response) {
    console.log("Error occurred");
    return;
  }

  return response.json();
};
