export const checkRole = (user: any) => {
  return user?.role === "Provider";
};

export const checkUser = (user: any, User: any) => {
  return user?.email === User?.email;
};
