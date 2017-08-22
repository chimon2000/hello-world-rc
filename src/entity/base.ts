export default class {
    omit(...fields: string[]) {
        fields.forEach(field => delete this[field])

        return this
    }
}
