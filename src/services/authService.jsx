export async function login(authDetails) {
  const response = await fetch(`${import.meta.env.VITE_REACT_APP_HOST}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authDetails),
  });
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }
  return data;
}
export async function register(authDetail) {
  const response = await fetch(
    `${import.meta.env.VITE_REACT_APP_HOST}/register`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(authDetail),
    }
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }

  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }
  return data;
}
export function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("cbid");
}
