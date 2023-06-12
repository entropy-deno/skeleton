import { createServer } from '@entropy';
import { AppModule } from './app/app.module.ts';

if (import.meta.main) {
  const server = createServer({
    config: {
      envFile: '.env',
    },
    modules: [
      AppModule,
    ],
  });

  await server.start();
}
