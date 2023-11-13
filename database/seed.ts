import { Encrypter, inject } from '../../core/mod.ts';
import { PrismaClient } from '@prisma';

const db = inject(PrismaClient);
const encrypter = inject(Encrypter);

await db.user.create({
  data: {
    name: 'Admin',
    email: 'admin@entropy.deno.dev',
    password: await encrypter.hash('1234'),
  },
});

await db.$disconnect();
