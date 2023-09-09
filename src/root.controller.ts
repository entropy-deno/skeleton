import { Controller, HttpStatus } from '@entropy/http';
import { Route } from '@entropy/router';

export class RootController extends Controller {
  @Route.Get('/')
  public index() {
    return this.render('home', {
      message: 'Hello, world!',
    });
  }

  @Route.Error(HttpStatus.NotFound)
  public notFound() {
    return this.render('404');
  }
}
