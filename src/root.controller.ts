import { Controller, render, Route } from '@entropy';

export class RootController implements Controller {
  @Route.Get('/')
  public index() {
    return render('home', {
      message: 'Hello, world!',
    });
  }

  @Route.Error(404)
  public notFound() {
    return render('404');
  }
}
