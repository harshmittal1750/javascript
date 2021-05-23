function getUserRole(name, role) {
  switch (role) {
    case "admin":
      return `hello ${name} You have full access`;

      break;
    case "subadmin":
      return `hello ${name} You have partial access`;

      break;
    case "moderator":
      return `hello ${name} You have access for moderating user`;

      break;
    case "user":
      return `hello ${name} You have access to read only`;

      break;

    default:
      break;
  }
}
console.log(getUserRole("harsh", "moderator"));
