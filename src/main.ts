import { createServer } from '@entropy';
import { RootModule } from './root.module.ts';

if (import.meta.main) {
  const server = createServer({
    config: {
      envFile: '.env',
    },
    modules: [
      RootModule,
    ],
  });

  await server.start();
}
