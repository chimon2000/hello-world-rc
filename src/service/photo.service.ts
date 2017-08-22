import { Photo } from '../entity/photo'
import { getEntityManager } from 'typeorm'

const repo = () => getEntityManager().getRepository<Photo>('Photo')

export const getPhotos = async () => {
    try {
        return await repo().find()
    } catch (error) {
        return []
    }
}

export const savePhoto = async (photo: Photo) => {
    try {
        return await repo().persist(photo)
    } catch (error) {
        return undefined
    }
}

export const removePhoto = async id => {
    try {
        await repo().removeById(id)

        return id
    } catch (error) {
        return undefined
    }
}
