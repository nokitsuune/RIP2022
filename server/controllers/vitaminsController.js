const uuid = require('uuid')
const path = require('path');
const {Vitamin, VitaminInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class VitaminsController {
    async create(req, res, next) {
        try{
            const {name, price, typeId, info } = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname,'..','static', fileName))
            const vitamin = await Vitamin.create({name, price, img: fileName, typeId})

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    VitaminInfo.create({
                        title: i.title,
                        description: i.description,
                        vitaminId: vitamin.id
                    })
                )
            }


            return res.json(vitamin)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req, res) {
        let {typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let vitamins;
        if (!typeId) {
            vitamins = await Vitamin.findAndCountAll({limit, offset})
        }
        if (typeId) {
            vitamins = await Vitamin.findAndCountAll({where:{typeId}, limit, offset})
        }
        return res.json(vitamins)
    }

    async getOne(req, res) {
        const {id} = req.params
        const vitamin = await Vitamin.findOne(
            {
                where: {id},
                include: [{model: VitaminInfo, as: 'info'}]
            }

        )
        return res.json(vitamin)
    }
}

module.exports = new VitaminsController()