import { AngularReduxChatPage } from './app.po';

describe('angular-redux-chat App', () => {
  let page: AngularReduxChatPage;

  beforeEach(() => {
    page = new AngularReduxChatPage();
  });

  it('should load the page', () => {
    page.navigateTo();

    expect(page.unreadCount()).toMatch(`3`);

    page.clickThread(1);
    expect(page.unreadCount()).toMatch(`2`);

    page.clickThread(2);
    expect(page.unreadCount()).toMatch(`1`);

    page.clickThread(3);
    expect(page.unreadCount()).toMatch(`0`);

    page.sendMessage('3');
    expect(page.unreadCount()).toMatch(`0`);

    page.clickThread(0);
    // expect(page.unreadCount()).toMatch(`1`);
    expect(page.getConversationText(3)).toContain(`I waited 3 seconds`);
  });
});
