import client from "./client";

function getUser(userHandle = "") {
  return client(`users/${userHandle}`);
}

export { getUser };
