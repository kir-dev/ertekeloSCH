import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import metadata from './metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.FRONTEND_HOST,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  const config = new DocumentBuilder()
    .setTitle('ÉrtékelőSch')
    .setDescription('ÉrtékelőSch API dokumentáció')
    .setVersion('0.1.0')
    .addBearerAuth()
    .build();

  await SwaggerModule.loadPluginMetadata(metadata);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3300);
}
bootstrap();
