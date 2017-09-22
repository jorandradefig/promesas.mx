import { PromesasPage } from './app.po';

describe('promesas App', () => {
  let page: PromesasPage;

  beforeEach(() => {
    page = new PromesasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
