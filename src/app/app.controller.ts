import { render, Route } from '@entropy';

export class AppController {
  @Route.Get('/')
  public async index() {
    return await render('./views/home', {
      message: 'Hello, world!',
    });
  }
}
