import { toast } from "react-toastify";
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
  localStorage.setItem("token", JSON.stringify(result));
  console.log(result);
  return result;
};

export const Authorization = async () => {
  try {
    const token = await JSON.parse(localStorage.getItem("token") as string);
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/auth/profile",
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token.access_token}`,
        },
      }
    );
    if (response.status === 401) throw new Error("Unauthorized");
    const data = await response.json();
    localStorage.setItem("user", JSON.stringify(data));
    toast.success("Login successfully");
    return data;
  } catch (error) {
    toast.error(error?.message);
  }
};
