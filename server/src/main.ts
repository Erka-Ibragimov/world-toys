import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const PORT = process.env.PORT || 7000;
    const app = await NestFactory.create(AppModule, { cors: true });
    await app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
bootstrap();
