export const errorHandler = (error) => {
  console.log(error);
  switch (error) {
    case "Error: not-found":
      return "Nie znaleziono użytkownika";

    case "auth/user-disabled":
      return "Konto użytkownika zostało zablokowane";
    case "auth/user-not-found":
      return "Nie znaleziono użytkownika";
    case "auth/wrong-password":
      return "Nieprawidłowe hasło";
    default:
      return error;
  }
};
