import { assertStringIncludes } from '@std/assert/mod.ts';
import { fetchRoute } from '@entropy/testing';
import { RootController } from './root.controller.ts';

Deno.test('root module', async (test) => {
  await test.step('root controller returns a proper home page', async () => {
    const responseContent = await fetchRoute('/', RootController);

    assertStringIncludes(responseContent, 'Hello, world!');
  });
});
