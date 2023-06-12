import { Controller, HttpMethod } from '@entropy';

export class AppController implements Controller<AppController> {
  public routes = [
    {
      path: '/' as const,
      action: 'index' as const,
      methods: [HttpMethod.Get],
    },
  ];

  public index(): string {
    return 'Hello World!';
  }
}
