import { MachinexMPage } from './app.po';

describe('machinex-m App', function() {
  let page: MachinexMPage;

  beforeEach(() => {
    page = new MachinexMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
