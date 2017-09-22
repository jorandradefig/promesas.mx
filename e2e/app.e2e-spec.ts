import { Promesas.MxPage } from './app.po';

describe('promesas.mx App', () => {
  let page: Promesas.MxPage;

  beforeEach(() => {
    page = new Promesas.MxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
