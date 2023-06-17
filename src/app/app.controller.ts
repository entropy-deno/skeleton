import { Controller, HttpMethod, render } from '@entropy';

export class AppController implements Controller<AppController> {
  public routes = [
    {
      path: '/' as const,
      action: 'index' as const,
      methods: [HttpMethod.Get],
    },
  ];

  public async index() {
    return await render('./views/home', {
      message: 'Hello, world!',
    });
  }
}
