function getUserRole(name, role) {
  switch (user) {
    case "admin":
      return `Hello ${name} You have full access`;

      break;
    case "subadmin":
      return ` Hello ${name} You have partial access`;

      break;
    case "moderator":
      return `Hello ${name} You have access for moderating users`;

      break;
    case "user":
      return ` Hello ${name} You have access to read only`;

      break;

    default:
      break;
  }
}
console.log(getUserRole("harsh", "user"));
