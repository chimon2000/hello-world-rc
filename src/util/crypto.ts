import { compare, hash } from 'bcrypt'
const saltRounds = 10

export const verifyPassword = (password, hash) => compare(password, hash)

export const hashPassword = password => hash(password, saltRounds)
