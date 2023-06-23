import { render, Route } from '@entropy';

export class AppController {
  @Route.Get('/')
  public async index() {
    return await render('./views/home', {
      message: 'Hello, world!',
    });
  }

  @Route.Error(404)
  public async notFound() {
    return await render('./views/404');
  }
}
