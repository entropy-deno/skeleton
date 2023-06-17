import { assertEquals } from '@std/testing/asserts.ts';
import { inject } from '@entropy';
import { AppController } from './app.controller.ts';

Deno.test('app module', async (test) => {
  await test.step('controller returns a proper home page', async () => {
    const response = await inject(AppController).index();

    assertEquals(response, 'Hello, World!');
  });
});
