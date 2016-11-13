import { InscFEPage } from './app.po';

describe('insc-fe App', function() {
  let page: InscFEPage;

  beforeEach(() => {
    page = new InscFEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
