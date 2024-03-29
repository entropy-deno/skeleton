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
      locales: {
        default: 'en',
        supported: [],
      },
    },
    modules: [
      RootModule,
    ],
  });

  await server.start();
}
