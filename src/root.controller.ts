import { renderView, Route } from '@entropy';

export class RootController {
  @Route.Get('/')
  public index() {
    return renderView('home', {
      message: 'Hello, world!',
    });
  }

  @Route.Error(404)
  public notFound() {
    return renderView('404');
  }
}
