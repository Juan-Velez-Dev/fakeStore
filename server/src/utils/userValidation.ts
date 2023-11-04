import { type User } from '../ts'
const nameRegex = /^[a-zA-Z]{2,20}$/
const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/
const emailRegex = /^(?=.*[a-zA-Z0-9._%+-]+@gmail\.com$|.*[a-zA-Z0-9._%+-]+@hotmail\.com$)/
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
//* Regex de password
// Debe contener al menos una letra mayúscula (A-Z).
// Debe contener al menos una letra minúscula (a-z).
// Debe contener al menos un dígito (0-9).
// Debe contener al menos un carácter especial entre @, $, !, %, *, ?, o &.
// Debe tener una longitud de 8 a 16 caracteres.

const userValidation = (user: User): boolean => {
  const { name, userName, email, password } = user

  if (typeof name !== 'string') return false
  else if (nameRegex.test(name)) return false

  if (typeof userName !== 'string') return false
  else if (usernameRegex.test(userName)) return false

  if (typeof email !== 'string') return false
  else if (emailRegex.test(email)) return false

  if (typeof password !== 'string') return false
  else if (passwordRegex.test(password)) return false

  return true
}

export default userValidation
