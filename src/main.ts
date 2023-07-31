import { createServer } from '@entropy';
import { RootModule } from './root.module.ts';

if (import.meta.main) {
  const server = createServer({
    config: {
      cspAllowedOrigins: [
        'https://fonts.googleapis.com',
      ],
      envFile: '.env',
    },
    modules: [
      RootModule,
    ],
  });

  await server.start();
}
