import { AuthenticationType } from "../Types/AuthenticationType";

export const login = async (data: AuthenticationType) => {
  const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  localStorage.setItem("token", result.refresh_token);
  return result;
};
