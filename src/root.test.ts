import { assertStringIncludes } from '@std/assert/mod.ts';
import { inject } from '@entropy/injector';
import { Router } from '@entropy/router';
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
