import { verify, sign } from 'jsonwebtoken'
const secret = 'secret'

export const decodeToken = token => {
    return new Promise((resolve, reject) => {
        verify(token, secret, (err, decoded) => {
            if (err) return reject(err)

            resolve(decoded)
        })
    })
}

export const encodeToken = body => {
    return new Promise((resolve, reject) => {
        sign(body, secret, (err, token) => {
            if (err) return reject(err)

            resolve(token)
        })
    })
}
