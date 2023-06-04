import { createServer } from '@flavor';

if (import.meta.main) {
  const server = createServer();

  await server.start();
}
