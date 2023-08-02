import { createServer } from '@entropy/server';
import { RootModule } from './root.module.ts';

if (import.meta.main) {
  const server = createServer({
    config: {
      contentSecurityPolicy: {
        allowedOrigins: [
          'https://fonts.googleapis.com',
        ],
      },
      envFile: '.env',
    },
    modules: [
      RootModule,
    ],
  });

  await server.start();
}
