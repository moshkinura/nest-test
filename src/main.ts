import { VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

// import * as csurf from 'csurf'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableVersioning({
    type: VersioningType.URI,
  })

  app.enableCors()
  // app.use(csurf())

  const config = new DocumentBuilder()
    .setTitle('SmartHome IOT Alice Dialogs')
    .setDescription('The API description')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'Bearer',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'Header',
      },
      'token'
    )
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api', app, document)

  await app.listen(3000)
  console.log(`Application is running on ${await app.getUrl()}/api`)
}

bootstrap()
