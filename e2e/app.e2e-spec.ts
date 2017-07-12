import { UnseenTubePage } from './app.po';

describe('unseen-tube App', () => {
  let page: UnseenTubePage;

  beforeEach(() => {
    page = new UnseenTubePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
