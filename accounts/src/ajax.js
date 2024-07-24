function manageErrors(response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

async function post(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  manageErrors(response);

  const resData = await response.json();

  return resData;
}

async function put(url, data) {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  manageErrors(response);

  const resData = await response.json();

  return resData;
}

async function get(url) {
  const response = await fetch(url);
  console.log(response);
  manageErrors(response);
  const data = await response.json();
  return data;
}

async function remove(url, data) {
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  manageErrors(response);

  const resData = "resource deleted...";

  return resData;
}

export { put, get, post, remove };
