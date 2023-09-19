import { assertEquals, assertStringIncludes } from '@std/assert/mod.ts';
import { fetchRoute } from '@entropy/testing';
import { HttpStatus } from '@entropy/http';
import { RootController } from './root.controller.ts';

Deno.test('root module', async (test) => {
  await test.step('root controller returns a proper home page', async () => {
    const { body, statusCode } = await fetchRoute('/', RootController);

    assertStringIncludes(body, 'Hello, world!');
    assertEquals(statusCode, HttpStatus.Ok);
  });
});
