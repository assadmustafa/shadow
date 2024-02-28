import { getSession } from "next-auth";

const isAuthenticated = async (context) => {
  const session = await getSession(context);
  return !!session; // Returns true if the user is authenticated, false otherwise
};

export default isAuthenticated;