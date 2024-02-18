import { Controller, Route } from '@entropy/router';
import { HttpStatus } from '@entropy/http';

export class RootController extends Controller {
  @Route.Get('/')
  public async index() {
    return await this.render('home', {
      message: 'Welcome to Entropy',
    });
  }

  @Route.Error(HttpStatus.NotFound)
  public async notFound() {
    return await this.render('404');
  }
}
