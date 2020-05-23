export default ({ values, errors }) => {
  const rules = {
    name: value => {
      if (!value) {
        errors.name = "Поле Имя, не может быть пустым!"
      }
    },
    phone: value => {
      if (!value) {
        errors.phone = "Поле Телефон, не может быть пустым!"
      }
    }
  }
  //Object.keys(values.map.get("forms")).forEach(key => rules[key] && rules[key](values.map.get("forms").get(key).values()))
}