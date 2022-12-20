import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';

import '../loan-application.js';

describe('LoanApplication', () => {

  // Write test cases inside this block
    it('can semantically compare full dom trees', async () => {
      const el = await fixture(`<LoanApplication></LoanApplication>`);
      expect(el).dom.to.equal('<LoanApplication></LoanApplication>');
    });
   
});
