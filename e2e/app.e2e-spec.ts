import { AngularDevelopmentPage } from './app.po';

describe('angular-development App', () => {
  let page: AngularDevelopmentPage;

  beforeEach(() => {
    page = new AngularDevelopmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
