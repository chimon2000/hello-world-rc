import { getEntityManager } from 'typeorm'

import { encodeToken } from '../util/jwt'
import { hashPassword, verifyPassword } from '../util/crypto'

import { User } from '../entity/user'

const repo = () => getEntityManager().getRepository<User>('User')

export const getToken = async ({ email, password }) => {
    try {
        let user = await repo().findOne({ email })
        let match = await verifyPassword(password, user.password)

        return match ? await encodeToken({ email: user.email }) : undefined
    } catch (error) {
        return undefined
    }
}

export const registerUser = async (user: User) => {
    try {
        user.password = await hashPassword(user.password)

        return await repo().persist(user)
    } catch (error) {
        return undefined
    }
}

export const userExists = async email => {
    try {
        const existing = await repo().findOne({ email })
        return !!existing
    } catch (error) {
        return false
    }
}
