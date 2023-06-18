import { assertEquals } from '@std/testing/asserts.ts';
import { inject, Router } from '@entropy';
import { AppController } from './app.controller.ts';

Deno.test('app module', async (test) => {
  const router = inject(Router);

  await test.step('controller returns a proper home page', async () => {
    router.registerController(AppController);

    const request = new Request('http://localhost:5050/');
    const response = await router.respond(request);

    assertEquals((await response.text()).includes('Hello, world!'), true);
  });
});
