import { AppPage } from './app.po';
import {beforeEach, describe, it, expect} from '@angular/core/testing/src/testing_internal';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
      expect(page.getParagraphText()).toEqual('Welcome to solid-app!');
  });
});
