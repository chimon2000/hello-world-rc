import { getPhotos, removePhoto, savePhoto } from '../../service/photo.service'
import { JsonController, Param, Body, Get, Post, Delete, InternalServerError } from 'routing-controllers'

import { Photo } from '../../entity/Photo'

@JsonController()
export default class {
    @Get('/photos')
    async getAll() {
        return await getPhotos()
    }

    @Post('/photos')
    async post(@Body() photo: Photo) {
        let created = await savePhoto(photo)

        if (!created) throw new InternalServerError('')

        return created
    }

    @Delete('/photos/:id')
    async remove(@Param('id') id: number) {
        let deleted = await removePhoto(id)

        if (!deleted) throw new InternalServerError('')

        return { id }
    }
}
