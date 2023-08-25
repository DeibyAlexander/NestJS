import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Astronauta } from './schemas/astronautas.Schema';
import { Model } from 'mongoose';
@Injectable()
export class AstronautasService {
    constructor(
        @InjectModel(Astronauta.name) private AstronautaModel:Model<Astronauta>
    ){}

    async create(astronauta:any){
        const createAstronauta = new this.AstronautaModel(astronauta)
        return createAstronauta.save()
    }
}
