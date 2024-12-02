import { AuthenticationType } from "../Types/AuthenticationType";

// get all users
export const getAllUsers = async () => {
  const data = await fetch("https://api.escuelajs.co/api/v1/users");
  const response = await data.json();
  return response;
};

// get single user by id
export const getSingleUser = async (id: number) => {
  const data = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
  const response = await data.json();
  return response;
};

// create a user
export const createUser = async (data: AuthenticationType) => {
  //   check if the user email is exist or not
  const checkEmail = await fetch(
    "https://api.escuelajs.co/api/v1/users/is-available",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
      }),
    }
  );
  const checker = await checkEmail.json();
  if (checker.isAvailable) throw new Error("Email already exist");
  //  if the email does not exist then create a new user
  const response = await fetch("https://api.escuelajs.co/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = response.json();
  localStorage.setItem("user", JSON.stringify(data));
  return result;
};
