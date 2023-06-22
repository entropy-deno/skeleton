import { PrismaClient } from './client/deno/edge.ts';
import { Encrypter, inject } from '@entropy';

const db = inject(PrismaClient);
const encrypter = inject(Encrypter);

await db.user.create({
  data: {
    name: 'Admin',
    email: 'admin@entropy.deno.dev',
    password: encrypter.hash('1234'),
  },
});

await db.$disconnect();
