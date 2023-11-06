import { Controller, HttpStatus } from '@entropy/http';
import { Route } from '@entropy/router';

export class RootController extends Controller {
  @Route.Get('/')
  public async index() {
    return await this.render('home', {
      message: 'Hello, world!',
    });
  }

  @Route.Error(HttpStatus.NotFound)
  public async notFound() {
    return await this.render('404');
  }
}
