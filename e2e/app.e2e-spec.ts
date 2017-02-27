import { DuxPage } from './app.po';

describe('dux App', () => {
  let page: DuxPage;

  beforeEach(() => {
    page = new DuxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
