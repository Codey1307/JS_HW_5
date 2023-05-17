function createNewUser() {
  newUser = {
    firstName: prompt("Введіть ім'я"),
    lastName: prompt("Введіть прізвище"),
    getLogin: function getLogin() {
      return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
    },
  };
  return newUser;
}

console.log(createNewUser().getLogin());