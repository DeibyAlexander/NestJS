import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParachutesModule } from './parachutes/parachutes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AstronautasModule } from './astronautas/astronautas.module';

@Module({
  imports: [ParachutesModule,MongooseModule.forRoot('mongodb+srv://astronautas:1234@clusternestjs.jpwvvnt.mongodb.net/AstronautasDB'), AstronautasModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
