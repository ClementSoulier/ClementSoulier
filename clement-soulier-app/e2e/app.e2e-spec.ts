import { ClementSoulierAppPage } from './app.po';

describe('clement-soulier-app App', () => {
  let page: ClementSoulierAppPage;

  beforeEach(() => {
    page = new ClementSoulierAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
