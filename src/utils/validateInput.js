export const validateInput = (data, eventType, stateSetter) => {
  if (data === "") {
      const emptyLoginText = "Поле логина не может быть пустым, пожалуйста, введите логин!";
      if (!eventType) {
          stateSetter(emptyLoginText);
          return false
      } else {
          alert(emptyLoginText)
          return false
      }
  }

  if (data.length > 13) {
      const longLoginText = "Поле логина не может быть длиннее 13 символов, пожалуйста, введите более коротки" +
              "й логин"
      if (!eventType) {
          stateSetter(longLoginText);
          return false
      } else {
          alert(longLoginText);
          return false
      }
  }

  return true
}