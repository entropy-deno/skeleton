import { createServer } from '@entropy/server';
import { RootModule } from './root.module.ts';

if (import.meta.main) {
  using server = createServer({
    config: {
      contentSecurityPolicy: {
        allowedOrigins: [
          'https://fonts.googleapis.com',
        ],
      },
      envFile: '.env',
      locales: {
        default: 'en',
      },
    },
    modules: [
      RootModule,
    ],
  });

  await server.start();
}
