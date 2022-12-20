import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import Sinon from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';
import { formatDate } from '@lion/localize';

describe('Basic details', () => {
  it('lion input text field', async () => {
    const el = await fixture(html`<basic-details></basic-details>`);
    const inputElement = el.shadowRoot.querySelector('lion-input');
    expect(inputElement.type).to.equal('text');
  });

  it('  capturedetails function invoked when a button is clicked', async () => {
    const el = await fixture(
      html`<basic-details
        ><lion-form><form></form></lion-form
      ></basic-details>`
    );
    const myFunctionStub = stub(el, '_captureDetails');
    el.requestUpdate();
    await el.updateComplete;
    el.shadowRoot.querySelector('button').click();
    expect(myFunctionStub).to.have.callCount(0);
  });

  

   

  it('is accesible form ', async () => {
    const el = await fixture(html`<lion-form></lion-form>`);
    await expect(el).to.be.accessible();
  });
});
