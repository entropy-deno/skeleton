import { assertStringIncludes } from '@std/testing/asserts.ts';
import { inject, Router } from '@entropy';
import { RootController } from './root.controller.ts';

Deno.test('root module', async (test) => {
  const router = inject(Router);

  await test.step('controller returns a proper home page', async () => {
    router.registerController(RootController);

    const request = new Request('http://localhost:5050/');
    const response = await router.respond(request);

    assertStringIncludes(await response.text(), 'Hello, world!');
  });
});
