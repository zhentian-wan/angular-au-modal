import { AuModalPage } from './app.po';

describe('au-modal App', () => {
  let page: AuModalPage;

  beforeEach(() => {
    page = new AuModalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
