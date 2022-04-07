import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { UsersModule } from './users/users.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('User example')
    .setDescription('The user API description')
    .setVersion('1.0')
    .addTag('users')
    .build()

  const documentUsers = SwaggerModule.createDocument(app, config, {
    include: [
      UsersModule,
    ]
  })

  SwaggerModule.setup('api', app, documentUsers)

  await app.listen(3000)
}

bootstrap()
