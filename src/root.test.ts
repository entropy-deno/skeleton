import { expect } from '@std/expect/expect.ts';
import { fetchRoute } from '@entropy/testing';
import { HttpStatus } from '@entropy/http';
import { RootController } from './root.controller.ts';

Deno.test('root module', async (test) => {
  await test.step('root controller returns a proper home page', async () => {
    const { body, statusCode } = await fetchRoute('/', RootController);

    expect(body).toContain('Hello, world!');
    expect(statusCode).toBe(HttpStatus.Ok);
  });
});
