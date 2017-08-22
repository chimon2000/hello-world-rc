import { HttpError } from 'routing-controllers'

export class UserConflictError extends HttpError {
    constructor() {
        super(409, 'User already exists!')
    }
}
