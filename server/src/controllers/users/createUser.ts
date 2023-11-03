interface User {
  name: string
  userName: string
  email: string
  password: string
}

const createUser = (data: User): User => {
  const user = {
    name: data.name,
    userName: data.userName,
    email: data.email,
    password: data.password
  }

  return user
}

export default createUser
