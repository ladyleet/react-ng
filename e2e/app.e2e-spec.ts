import { ReactNgPage } from './app.po';

describe('react-ng App', () => {
  let page: ReactNgPage;

  beforeEach(() => {
    page = new ReactNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
